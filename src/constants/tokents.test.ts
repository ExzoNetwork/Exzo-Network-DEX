import { Exzo } from './tokens'

describe('Ether', () => {
  it('static constructor uses cache', () => {
    expect(Exzo.onChain(1) === Exzo.onChain(1)).toEqual(true)
  })
  it('caches once per chain ID', () => {
    expect(Exzo.onChain(1) !== Exzo.onChain(2)).toEqual(true)
  })
  it('#equals returns false for diff chains', () => {
    expect(Exzo.onChain(1).equals(Exzo.onChain(2))).toEqual(false)
  })
  it('#equals returns true for same chains', () => {
    expect(Exzo.onChain(1).equals(Exzo.onChain(1))).toEqual(true)
  })
})
