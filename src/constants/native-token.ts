import { ChainId } from './chains'
import { Token } from '../sdk-core/entities/token'
import { NativeCurrency } from '../sdk-core/entities/nativeCurrency'
import invariant from 'tiny-invariant'
import { WETH9_ADDRESS } from './addresses'

export const WXZO = {
  // Mainly for unit tests
  1: new Token(1, WETH9_ADDRESS[4], 18, 'WXZO', 'Wrapped EXZO'),
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, WETH9_ADDRESS[ChainId.MAINNET], 18, 'WXZO', 'Wrapped EXZO'),
  [ChainId.TESTNET]: new Token(ChainId.TESTNET, WETH9_ADDRESS[ChainId.TESTNET], 18, 'WXZO', 'Wrapped EXZO'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, WETH9_ADDRESS[ChainId.RINKEBY], 18, 'WXZO', 'Wrapped EXZO'),
}
export const WETH9 = WXZO

export class Exzo extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'XZO', 'Exzo Network')
  }

  public get wrapped(): Token {
    const weth9 = WXZO[this.chainId as ChainId]
    invariant(!!weth9, 'WRAPPED')
    return weth9
  }

  private static _etherCache: { [chainId: number]: Exzo } = {}

  public static onChain(chainId: number): Exzo {
    return this._etherCache[chainId] ?? (this._etherCache[chainId] = new Exzo(chainId))
  }

  public equals(other: NativeCurrency | Token): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
