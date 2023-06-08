/**
 *
 * https://github.com/ExzoNetwork/v2-periphery/blob/main/scripts/config/config.ts
 *
 * When changing this also update: cypress/integration/contracts.ts
 *
 */

const PERIPHERY_TESTNET = {
  factory: '0x81BC50a2df9cE424843e3c17110E1ab1FedCD4b8',
  weth9: '0xcc491f589B45d4a3C679016195B3FB87D7848210',
  router: '0x72bd489d3cF0e9cC36af6e306Ff53E56d0f9EFb4',
  mockUSDC: '0xc48Efe267a31b5Af4cFDb50C8457914aadB0b875',
  mockEVMOS: '0xf1361Dc7DFB724bd29FE7ade0CdF9785F2Bc20E6',
  mockATOM: '0x9832169B33DC5777D3d28572f35E0a537Ff7A04C',
  mockOSMOSIS: '0x1dccd8025688e39C72f2539C6f00d77bd6678425',
  multicall2: '0x1B7c09Ac8aA1e6e1d299d9301B539A368eD4c176',
  LHS: '0x7c21d6A51d6f591A95470f1F262C9c804c4CEAc3',
  RHS: '0xD3607915d934576EcdC389E7DBc641097fd5A0dE',
  testerAddress: '0x1662BfeA0Af3515baf9DAb3f0961Dc26DD35202B',
  rewardToken: '0x7e806D59528F6Fa7CCcAdb4821Dd42551113DEFc',
  secondaryRewardToken: '0x9AC19677BD6B1a3ba046C33f4D2f1952cA0e9a13',
  miniChef: '0x0fCee557E3eB94913e202eF91314f14298591a61',
  complexRewarderTime: '0x2916d2e0B675e6993250f2DB9764Cd7fD5379C04',
  diffusion: '',
}

const MAINNET_PERIPHERY = {
  factory: '0x65C942b88B2cD56E2DFe79C0Bf145B418716DB3B', // Factory
  weth9: '0xC1128CB655cB12A67228505a86c6C867033215fF', // WXZO
  router: '0x200e0B95fA8D28bCdcd57AA00A6F217f3fc332D9', // Router
  multicall2: '0xa08dd8166342c1d839e64d6cd2b7e2e8ca468a18', // Multicall2
  minichef: '0x067eC87844fBD73eDa4a1059F30039584586e09d',
  diffusion: '0x3f75ceabCDfed1aCa03257Dc6Bdc0408E2b4b026',
}

export const MAINNET = {
  ...MAINNET_PERIPHERY,
  diffusionbar: '0x75aeE82a16BD1fB98b11879af93AB7CE055f66Da',
  airdrop: '0xb9A52744213eA63D57F389622e1d569Bb4705207',
}

export const TESTNET = {
  ...PERIPHERY_TESTNET,
  airdrop: '0x2F7Ad6172388aED2017FBfA1631724F172360Ab1',
  diffusionbar: '0x2314D451a1A2519501119f105dd1D65D0CE4E93b',
}