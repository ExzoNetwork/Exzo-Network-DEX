import { CONTRACTS } from './contracts'
const { MXZO, MUSDC, MATOM } = CONTRACTS

describe('Remove Liquidity', () => {
  it('Native remove', () => {
    cy.visit(`/remove/v2/XZO/${MUSDC}`)
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'XZO')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MUSDC')
  })

  it('Native remove swap order', () => {
    cy.visit(`/remove/v2/${MUSDC}/XZO`)
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'MUSDC')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'XZO')
  })

  it('loads the two correct tokens', () => {
    cy.visit(`/remove/v2/${MUSDC}/${MATOM}`)
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'MUSDC')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MATOM')
  })

  it('does not crash if WXZO is duplicated', () => {
    cy.visit(`/remove/v2/${MXZO}/${MXZO}`)
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'MXZO')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MXZO')
  })

  it('does not crash if XZO is duplicated', () => {
    cy.visit(`/remove/v2/XZO/XZO`)
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'XZO')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'XZO')
  })

  it.skip('token not in storage is loaded', () => {
    cy.visit('/remove/v2/0xb290b2f9f8f108d03ff2af3ac5c8de6de31cdf6d/0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'SKL')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MKR')
  })
})
