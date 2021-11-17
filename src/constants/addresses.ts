import { Networks } from "./blockchain";

const AVAX_MAINNET = {
    DAO_ADDRESS: "0x78a9e536EBdA08b5b9EDbE5785C9D1D50fA3278C",
    MEMO_ADDRESS: "0x136Acd46C134E8269052c62A67042D6bDeDde3C9",
    TIME_ADDRESS: "0xb54f16fB19478766A268F172C9480f8da1a7c9C3",
    MIM_ADDRESS: "0x130966628846BFd36ff31a822705796e8cb8C18D",
    STAKING_ADDRESS: "0x4456B87Af11e87E329AB7d7C7A246ed1aC2168B9",
    STAKING_HELPER_ADDRESS: "0x096BBfB78311227b805c968b070a81D358c13379",
    RUG_BONDING_CALC_ADDRESS: "0x0bC65542e9A8fD79002beE76C2E8CfE5A0CA573A",
    TREASURY_ADDRESS: "0x1c46450211CB2646cc1DA3c5242422967eD9e04c",
    // ZAPIN_ADDRESS: "0xc669dC61aF974FdF50758d95306e4083D36f1430",
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.AVAX) return AVAX_MAINNET;

    throw Error("Network don't support");
};
