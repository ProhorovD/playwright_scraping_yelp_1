import playwright from 'playwright'
import {result as list} from './data.js'
import fs from 'fs'


async function main() {
  const browser = await playwright.chromium.launch({
    headless: false
  })
  let res = {}
  

  const page = await browser.newPage();


  let track = 0
  let list2 = list.slice(0)
  for (let i in list2) {
   
  await page.goto(list2[i])
  let phoneNumber
  let address
  let name
  let website

  if (await page.isVisible("(//p[@class=' css-na3oda']/following-sibling::p)[2]")){
  phoneNumber = await page.locator("(//p[@class=' css-na3oda']/following-sibling::p)[2]").innerText()
  }else{
  phoneNumber = ' '
  }


  if (await page.isVisible("//p[@class=' css-1p9ibgf']/following-sibling::p[1]")){
  address = await page.locator("//p[@class=' css-1p9ibgf']/following-sibling::p[1]").innerText()
}else{
  address = ' '
}

  
  if (await page.isVisible("//html/body/yelp-react-root/div[1]/div[3]/div[1]/div[1]/div/div[2]/div[1]/h1")) {
  name = await page.locator("//html/body/yelp-react-root/div[1]/div[3]/div[1]/div[1]/div/div[2]/div[1]/h1").innerText()
}
else{
  name = ' '
}

  if (await page.isVisible("//p[text()='Business website']/following-sibling::p")){
  website = await page.locator("//p[text()='Business website']/following-sibling::p").innerText()
}else{
  website = ''
}
  if (await page.isVisible("//html/body/yelp-react-root/div[1]/div[3]/div[1]/div[1]/div/div/div[1]/h1")){
    name = await page.locator("//html/body/yelp-react-root/div[1]/div[3]/div[1]/div[1]/div/div/div[1]/h1").innerText()
  }

  if (await page.isVisible("//html/body/yelp-react-root/div[1]/div[4]/div/div[1]/div[1]/main/div[1]/div/div/div[1]/h1")){
    name = await page.locator("//html/body/yelp-react-root/div[1]/div[4]/div/div[1]/div[1]/main/div[1]/div/div/div[1]/h1").innerText()
  }
  
  res = Object.assign(res, {name: name, phone_number: phoneNumber, address: address, website: website, id: track })
  track++
  fs.appendFile('result_parse.json', JSON.stringify(res)+',', (err) =>
  {
    if (err) throw err;

    console.log('Saved')
  })
  console.log(res)

  await page.waitForTimeout(2000)
  }
}

main()