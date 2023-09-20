import playwright from 'playwright'
import fs from 'fs'

let list = []
async function main() {
  const browser = await playwright.chromium.launch({
    headless: false
  })

  const page = await browser.newPage();
  await page.goto('https://www.yelp.com/search?find_desc=plastic+surgeon&find_loc=Washington%2C+DC')
  while(true){
  const test = await page.locator('div > div > h3 > span > a').all()
  
  
  
  for (let item of test) {
    let temp = await item.getAttribute('href')

    let add = 'https://www.yelp.com'
    let res = add + temp
    
    list.push(res)
  }
  await page.waitForTimeout(10000)
  await page.locator('div:nth-child(11) > span > a').click()
  fs.writeFile('result.txt', JSON.stringify(list), (err) =>
  {
    if (err) throw err;

    console.log('Saved')
  })
  console.log(list)
}

}

main()