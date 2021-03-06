/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface CommonPartialTokenInterface extends ethers.utils.Interface {
  functions: {
    "alterStatedPriceAndBond(uint256,int256,int256)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burnToken(uint256)": FunctionFragment;
    "buyToken(uint256,uint256,uint256)": FunctionFragment;
    "clubAddress()": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "getBond(uint256)": FunctionFragment;
    "getIntent(uint256,address)": FunctionFragment;
    "getLiquidationStartedAt(uint256)": FunctionFragment;
    "getPrice(uint256)": FunctionFragment;
    "getStatedPrice(uint256)": FunctionFragment;
    "getTokenIdsForAddress(address)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "isBeingLiquidated(uint256)": FunctionFragment;
    "moveAccumulatedFundsToTreasury()": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "reapInterestForTokenIds(uint256[])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "setEscrowIntent(uint256,uint256,uint256,uint256)": FunctionFragment;
    "setHalfLife(uint16)": FunctionFragment;
    "setInterestRate(uint16)": FunctionFragment;
    "setMinimumBond(uint16)": FunctionFragment;
    "tokenByIndex(uint256)": FunctionFragment;
    "tokenOfOwnerByIndex(address,uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transferClubOwnership(address)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "viewBondRefund(address)": FunctionFragment;
    "withdrawBondRefund()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "alterStatedPriceAndBond",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "burnToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyToken",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "clubAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBond",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getIntent",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidationStartedAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getStatedPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenIdsForAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isBeingLiquidated",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "moveAccumulatedFundsToTreasury",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "reapInterestForTokenIds",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setEscrowIntent",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setHalfLife",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setInterestRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinimumBond",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenByIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenOfOwnerByIndex",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferClubOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "viewBondRefund",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawBondRefund",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "alterStatedPriceAndBond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "clubAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBond", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getIntent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidationStartedAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getStatedPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenIdsForAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBeingLiquidated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moveAccumulatedFundsToTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reapInterestForTokenIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEscrowIntent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setHalfLife",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInterestRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinimumBond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenOfOwnerByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferClubOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewBondRefund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawBondRefund",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "NewPriceSet(address,uint256,uint256)": EventFragment;
    "OwnershipClubTransferred(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPriceSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipClubTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class CommonPartialToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CommonPartialTokenInterface;

  functions: {
    alterStatedPriceAndBond(
      _tokenId: BigNumberish,
      bondDelta: BigNumberish,
      priceDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    burnToken(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buyToken(
      tokenId: BigNumberish,
      newPrice: BigNumberish,
      bondAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    clubAddress(overrides?: CallOverrides): Promise<[string]>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getBond(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getIntent(
      tokenId: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber, BigNumber] & {
          statedPrice: BigNumber;
          bondToPost: BigNumber;
          expiry: BigNumber;
        }
      ]
    >;

    getLiquidationStartedAt(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPrice(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getStatedPrice(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTokenIdsForAddress(
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isBeingLiquidated(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    moveAccumulatedFundsToTreasury(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    reapInterestForTokenIds(
      tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setEscrowIntent(
      tokenId: BigNumberish,
      price: BigNumberish,
      bond: BigNumberish,
      expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setHalfLife(
      newHalfLife: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setInterestRate(
      newInterestRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinimumBond(
      newMinimumBond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferClubOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    viewBondRefund(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdrawBondRefund(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  alterStatedPriceAndBond(
    _tokenId: BigNumberish,
    bondDelta: BigNumberish,
    priceDelta: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  burnToken(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buyToken(
    tokenId: BigNumberish,
    newPrice: BigNumberish,
    bondAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  clubAddress(overrides?: CallOverrides): Promise<string>;

  getApproved(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getBond(
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getIntent(
    tokenId: BigNumberish,
    receiver: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      statedPrice: BigNumber;
      bondToPost: BigNumber;
      expiry: BigNumber;
    }
  >;

  getLiquidationStartedAt(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPrice(
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getStatedPrice(
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTokenIdsForAddress(
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isBeingLiquidated(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  moveAccumulatedFundsToTreasury(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  reapInterestForTokenIds(
    tokenIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,bytes)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setEscrowIntent(
    tokenId: BigNumberish,
    price: BigNumberish,
    bond: BigNumberish,
    expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setHalfLife(
    newHalfLife: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setInterestRate(
    newInterestRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinimumBond(
    newMinimumBond: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenByIndex(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokenOfOwnerByIndex(
    owner: string,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferClubOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  viewBondRefund(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  withdrawBondRefund(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    alterStatedPriceAndBond(
      _tokenId: BigNumberish,
      bondDelta: BigNumberish,
      priceDelta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    burnToken(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    buyToken(
      tokenId: BigNumberish,
      newPrice: BigNumberish,
      bondAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    clubAddress(overrides?: CallOverrides): Promise<string>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getBond(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIntent(
      tokenId: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        statedPrice: BigNumber;
        bondToPost: BigNumber;
        expiry: BigNumber;
      }
    >;

    getLiquidationStartedAt(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStatedPrice(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenIdsForAddress(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isBeingLiquidated(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    moveAccumulatedFundsToTreasury(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    reapInterestForTokenIds(
      tokenIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setEscrowIntent(
      tokenId: BigNumberish,
      price: BigNumberish,
      bond: BigNumberish,
      expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setHalfLife(
      newHalfLife: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setInterestRate(
      newInterestRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinimumBond(
      newMinimumBond: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferClubOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    viewBondRefund(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdrawBondRefund(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    Approval(
      _owner?: string | null,
      _approved?: string | null,
      _tokenId?: BigNumberish | null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _owner: string; _approved: string; _tokenId: BigNumber }
    >;

    ApprovalForAll(
      _owner?: string | null,
      _operator?: string | null,
      _approved?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { _owner: string; _operator: string; _approved: boolean }
    >;

    NewPriceSet(
      owner?: null,
      tokenId?: null,
      price?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { owner: string; tokenId: BigNumber; price: BigNumber }
    >;

    OwnershipClubTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    Transfer(
      from?: null,
      to?: null,
      _tokenId?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; _tokenId: BigNumber }
    >;
  };

  estimateGas: {
    alterStatedPriceAndBond(
      _tokenId: BigNumberish,
      bondDelta: BigNumberish,
      priceDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    burnToken(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buyToken(
      tokenId: BigNumberish,
      newPrice: BigNumberish,
      bondAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    clubAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBond(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIntent(
      tokenId: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLiquidationStartedAt(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStatedPrice(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenIdsForAddress(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isBeingLiquidated(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    moveAccumulatedFundsToTreasury(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reapInterestForTokenIds(
      tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setEscrowIntent(
      tokenId: BigNumberish,
      price: BigNumberish,
      bond: BigNumberish,
      expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setHalfLife(
      newHalfLife: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setInterestRate(
      newInterestRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinimumBond(
      newMinimumBond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferClubOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    viewBondRefund(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdrawBondRefund(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    alterStatedPriceAndBond(
      _tokenId: BigNumberish,
      bondDelta: BigNumberish,
      priceDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burnToken(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buyToken(
      tokenId: BigNumberish,
      newPrice: BigNumberish,
      bondAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    clubAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBond(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIntent(
      tokenId: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLiquidationStartedAt(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrice(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStatedPrice(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenIdsForAddress(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isBeingLiquidated(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    moveAccumulatedFundsToTreasury(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reapInterestForTokenIds(
      tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setEscrowIntent(
      tokenId: BigNumberish,
      price: BigNumberish,
      bond: BigNumberish,
      expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setHalfLife(
      newHalfLife: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setInterestRate(
      newInterestRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinimumBond(
      newMinimumBond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferClubOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    viewBondRefund(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawBondRefund(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
