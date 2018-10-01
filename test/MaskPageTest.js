// @flow
import { assert } from 'chai'

import Cookie from '../src/Classes/Cookie';
import MaskPage from '../src/pageobjects/MaskPage';


import DriverBuilder from '../src/lib/DriverBuilder'
import driverutils from '../src/lib/driver-utils'

describe('Intro Mask Tests', function () {
  let driverBuilder
  let driver

  before(async function() {
    
  });

  beforeEach(async function () {
    driverBuilder = new DriverBuilder()
    driver = driverBuilder.driver
    await driverutils.goToHome(driver);
  })
  
  it('access without cookie', async function () {
    const maskPage = new MaskPage(driver)
    const isIntroExist = await maskPage.isIntroExist();
    assert(isIntroExist,"Intro mask should display")
  })

  it('Click 立即開始購物 button', async function () {
    const maskPage = new MaskPage(driver)
    await maskPage.clickComerBtn();
    const intro = await driver.manage().getCookie('app-intro');
    assert(intro.value==1,"should has app-intro cookie")
    const isIntroExist = await maskPage.isIntroExist();
    assert(!isIntroExist,"Intro mask should hide")
  })

  it('access with cookie', async function () {
     const maskPage = new MaskPage(driver)
     const cookie = new Cookie(driver)
     await cookie.addIntro()
  
     const isIntroExist = await maskPage.isIntroExist();
     assert(!isIntroExist,"Intro mask should hide")
  })


  afterEach(async function () {
    await driver.sleep(1000)
    await driverBuilder.quit()
  })


  after(async function() {

   // await driver.sleep(8000)
   // await driverBuilder.quit()
  });
})
