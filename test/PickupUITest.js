// @flow
import { assert } from 'chai'
import Cookie from '../src/Classes/Cookie';
import PickupPointUI from '../src/UIobjects/PickupPointUI';

import DriverBuilder from '../src/lib/DriverBuilder'
import driverutils from '../src/lib/driver-utils'

describe('Pickup Point UI Tests', function () {
  let driverBuilder
  let driver

  before(async function() {
 
  });

  beforeEach(async function () {
    driverBuilder = new DriverBuilder()
    driver = driverBuilder.driver
    await driverutils.goToHome(driver)
  
    const cookie = new Cookie(driver);
    await cookie.addIntro()
  })

  it('access without cookie pickup-selected-pickup', async function () {
    const pickupPointUI = new PickupPointUI(driver)
    pickupPointUI.hasToolTips();
  })

  it('access with cookie pickup-selected-pickup', async function () {
    const cookie = new Cookie(driver);
    await cookie.addSelectedPickup("4");
    const url = await driver.getCurrentUrl();
    assert.match(url, /pickup\/4\/deals/,'url not OK');
  })

  it('change pickup', async function () {
    const cookie = new Cookie(driver);
    await cookie.addSelectedPickup("4");
    const pickupPointUI = new PickupPointUI(driver);
    await pickupPointUI.access();
  })

  


  afterEach(async function () {
    await driver.sleep(1000);
    await driverBuilder.quit()
  })


  after(async function() {
    //await driver.sleep(8000)
   // await driverBuilder.quit()
  });
})
