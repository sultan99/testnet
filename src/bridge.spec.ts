import type {Page} from '@playwright/test'

import * as dotenv from 'dotenv'
import {expect, test as it} from '@playwright/test'

dotenv.config()

const sendToScrollNetwork = async (page: Page) => {
  // TODO: Add implementation of sending ETH tokens from Groerli to Scroll network
  const transaction = `here should be the transaction hash`
  expect(transaction.startsWith(`0x`)).toBeTruthy()
}

/**
 * Your objective is:
 *  - Setup the Dappwright library.
 *  - Connect a Metamask wallet`
 *  - Transfer test ETH tokens to the Scroll Network.
 *  - Print the transaction hash in the console.
 */
it(`should send ETH to Scroll network`, async ({page}) => {
  await page.goto(`https://scroll.io/alpha`)
  await page.getByText(`Connect Wallet`).first().click()
  await page.getByText(`MetaMask`).first().click()
  // await wallet.approve()
  await sendToScrollNetwork(page)
})
