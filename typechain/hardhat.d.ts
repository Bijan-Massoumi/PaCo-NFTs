/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "BondTracker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BondTracker__factory>;
    getContractFactory(
      name: "IPaCoToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPaCoToken__factory>;
    getContractFactory(
      name: "PaCoExample",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PaCoExample__factory>;
    getContractFactory(
      name: "PaCoToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PaCoToken__factory>;
    getContractFactory(
      name: "PaCoTokenEnumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PaCoTokenEnumerable__factory>;
    getContractFactory(
      name: "Treasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Treasury__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "BondTracker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BondTracker>;
    getContractAt(
      name: "IPaCoToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPaCoToken>;
    getContractAt(
      name: "PaCoExample",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PaCoExample>;
    getContractAt(
      name: "PaCoToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PaCoToken>;
    getContractAt(
      name: "PaCoTokenEnumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PaCoTokenEnumerable>;
    getContractAt(
      name: "Treasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Treasury>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
