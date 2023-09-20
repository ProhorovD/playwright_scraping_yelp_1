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

  

      
      let phoneNumber = await page.locator("body > yelp-react-root > div:nth-child(1) > div.biz-details-page-container-outer__09f24__pZBzx.border-color--default__09f24__NPAKY > div > div.css-39ydts.border--bottom__09f24___mg5X.border-color--default__09f24__NPAKY > div.css-ncv51b.padding-l2__09f24__kf_t_.border-color--default__09f24__NPAKY > aside > section:nth-child(4) > div > div:nth-child(1) > div > div.arrange-unit__09f24__rqHTg.arrange-unit-fill__09f24__CUubG.border-color--default__09f24__NPAKY > p.css-1p9ibgf > a")
      let res = await phoneNumber.getAttribute('href')
      console.log(res)


      
  
  track++
 

  await page.waitForTimeout(2000)
  }
}

main()