export enum ChainId {
  MAINNET = 1229,
  TESTNET = 2370,
  RINKEBY = 4,
}

export const NETWORK_URLS: {
  [chainId in ChainId]: string
} = {
  [ChainId.MAINNET]: `https://mainnet.exzo.technology`,
  [ChainId.TESTNET]: `https://testnet.exzo.technology`,
  // From Metamask
  [ChainId.RINKEBY]: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
}
