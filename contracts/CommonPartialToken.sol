// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./CommonPartialTokenEnumerable.sol";
import "./BondTracker.sol";
import "./NftBurner.sol";
import "./InterestUtils.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/Context.sol";

contract CommonPartialToken is
    CommonPartiallyOwnedEnumerable,
    BondTracker,
    NftBurner
{
    using Address for address;

    // Mapping from token ID to owner address
    mapping(uint256 => address) private _owners;

    // Mapping owner address to token count
    mapping(address => uint256) private _balances;

    // Mapping from token ID to approved address
    mapping(uint256 => address) private _tokenApprovals;

    IERC20 erc20ToUse;

    constructor(address erc20Address) {
        erc20ToUse = IERC20(erc20Address);
    }

    function balanceOf(address owner)
        public
        view
        override
        returns (uint256 balance)
    {
        require(owner != address(0), "Balance query for the zero address");
        return _balances[owner];
    }

    function ownerOf(uint256 tokenId)
        public
        view
        virtual
        override
        returns (address)
    {
        address owner = _owners[tokenId];
        require(owner != address(0), "owner query for nonexistent token");
        return owner;
    }

    function buyToken(
        uint256 tokenId,
        uint256 newPrice,
        uint256 bondAmount
    ) external virtual override {
        address currentOwnerAddress = ownerOf(tokenId);
        require(
            currentOwnerAddress != address(0),
            "CommonPartialToken: token already minted"
        );
        require(
            currentOwnerAddress != msg.sender,
            "can't claim your own token."
        );

        uint256 interestToReap;
        uint256 liquidationStartedAt;
        uint256 bondRemaining;

        BondInfo memory currentOwnersBond = _bondInfosAtLastCheckpoint[tokenId];
        (
            bondRemaining,
            interestToReap,
            liquidationStartedAt
        ) = _getCurrentBondInfoForToken(currentOwnersBond);

        if (liquidationStartedAt == 0) {
            uint256 buyPrice = InterestUtils.getLiquidationPrice(
                currentOwnersBond.statedPrice,
                block.timestamp - liquidationStartedAt,
                halfLife
            );
            erc20ToUse.transferFrom(msg.sender, ownerOf(tokenId), buyPrice);
        } else {
            erc20ToUse.transferFrom(
                msg.sender,
                ownerOf(tokenId),
                currentOwnersBond.statedPrice
            );
        }

        _bondToBeReturnedToAddress[currentOwnerAddress] += bondRemaining;
        interestReaped += interestToReap;

        _beforeTokenTransfer(currentOwnerAddress, msg.sender, tokenId);
        _balances[msg.sender] += 1;
        _balances[currentOwnerAddress] -= 1;
        _owners[tokenId] = msg.sender;

        _generateAndPersistNewBondInfo(tokenId, newPrice, bondAmount);

        erc20ToUse.transferFrom(msg.sender, address(this), bondAmount);
        emit Transfer(currentOwnerAddress, msg.sender, tokenId, newPrice);
    }

    function alterStatedPriceAndBond(
        uint256 _tokenId,
        int256 bondDelta,
        int256 priceDelta
    ) external override {
        require(
            ownerOf(_tokenId) == msg.sender,
            "Cannot modify token that is not owned"
        );
        uint256 interestToReap;
        uint256 amountToTransfer;
        BondInfo storage lastBondInfo = _bondInfosAtLastCheckpoint[_tokenId];
        (interestToReap, amountToTransfer) = _refreshAndModifyExistingBondInfo(
            lastBondInfo,
            bondDelta,
            priceDelta
        );
        interestReaped += interestToReap;
        if (amountToTransfer > 0)
            erc20ToUse.transferFrom(
                msg.sender,
                address(this),
                amountToTransfer
            );
    }

    function _mint(
        address to,
        uint256 tokenId,
        uint256 initialStatedPrice,
        uint256 bondAmount
    ) internal virtual {
        require(
            to != address(0),
            "CommonPartialToken: mint to the zero address"
        );
        require(!_exists(tokenId), "CommonPartialToken: token already minted");

        uint256 remainingBond;
        uint256 interestToReap;
        uint256 liquidationStartedAt;

        _beforeTokenTransfer(address(0), to, tokenId);
        _balances[to] += 1;
        _owners[tokenId] = to;

        _generateAndPersistNewBondInfo(tokenId, initialStatedPrice, bondAmount);
        erc20ToUse.transferFrom(to, address(this), bondAmount);
        emit Transfer(address(0), to, tokenId, initialStatedPrice);
    }

    function _exists(uint256 tokenId) internal view virtual returns (bool) {
        return _owners[tokenId] != address(0);
    }

    /**
     * @dev See {IERC721Enumerable-tokenOfOwnerByIndex}.
     */
    function tokenOfOwnerByIndex(address owner, uint256 index)
        public
        view
        virtual
        override
        returns (uint256)
    {
        require(
            index < balanceOf(owner),
            "ERC721Enumerable: owner index out of bounds"
        );
        return _ownedTokens[owner][index];
    }

    /**
     * @dev See {IERC721Enumerable-totalSupply}.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return _allTokens.length;
    }

    /**
     * @dev See {IERC721Enumerable-tokenByIndex}.
     */
    function tokenByIndex(uint256 index)
        public
        view
        virtual
        override
        returns (uint256)
    {
        require(
            index < totalSupply(),
            "ERC721Enumerable: global index out of bounds"
        );
        return _allTokens[index];
    }

    /**
     * @dev Hook that is called before any token transfer. This includes minting
     * and burning.
     *
     * Calling conditions:
     *
     * - When `from` and `to` are both non-zero, ``from``'s `tokenId` will be
     * transferred to `to`.
     * - When `from` is zero, `tokenId` will be minted for `to`.
     * - When `to` is zero, ``from``'s `tokenId` will be burned.
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) private {
        if (from == address(0)) {
            _addTokenToAllTokensEnumeration(tokenId);
        } else if (from != to) {
            _removeTokenFromOwnerEnumeration(from, tokenId, balanceOf(from));
        }
        if (to == address(0)) {
            _removeTokenFromAllTokensEnumeration(tokenId);
        } else if (to != from) {
            _addTokenToOwnerEnumeration(to, tokenId, balanceOf(to));
        }
    }

    function _getTokenIdsForAddress(address owner)
        public
        view
        returns (uint256[] memory)
    {
        uint256 size = balanceOf(owner);
        uint256[] memory tokenIds = new uint256[](size);
        for (uint256 i = 0; i < size; i++) {
            tokenIds[tokenOfOwnerByIndex(owner, i)];
        }
        return tokenIds;
    }

    function withdrawBondRefund() external {
        erc20ToUse.transferFrom(
            address(this),
            msg.sender,
            _bondToBeReturnedToAddress[msg.sender]
        );
    }
}
