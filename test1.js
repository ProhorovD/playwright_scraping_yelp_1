

import playwright from 'playwright'
import {result as list} from './data.js'
import fs from 'fs'


async function main() {
  const browser = await playwright.chromium.launch({
    headless: false
  })
  let res = {}
  

  const page = await browser.newPage();


  let track = 1
  let list2 = list.slice(track)
  for (let i in list2) {
   
  await page.goto(list2[i])

  

   
  track++
 

  await page.waitForTimeout(2000)
  }
}

main()
