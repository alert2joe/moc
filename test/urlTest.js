// @flow
import { assert } from 'chai'
import Cookie from '../src/Classes/Cookie';

import BasePage from '../src/pageobjects/BasePage';
import HomePage from '../src/pageobjects/HomePage';
import SignPage from '../src/pageobjects/SignPage';
import AboutPage from '../src/pageobjects/AboutPage';
import UserPage from '../src/pageobjects/UserPage';
import UserDealPage from '../src/pageobjects/UserDealPage';
import UserReceivedPage from '../src/pageobjects/UserReceivedPage';
import UserOrderPage from '../src/pageobjects/UserOrderPage';
import CartPage from '../src/pageobjects/CartPage';


//import SearchResultsPage from './../src/pageobjects/SearchResultsPage'

import DriverBuilder from '../src/lib/DriverBuilder'
import driverutils from '../src/lib/driver-utils'

describe('URL Tests', function () {
  let driverBuilder
  let driver

  before(async function() {
    driverBuilder = new DriverBuilder()
    driver = driverBuilder.driver
    await driverutils.goToHome(driver)
    const cookie = new Cookie(driver);
    await cookie.addIntro();
    await cookie.addSelectedPickup("4");
  });

  beforeEach(async function () {

  })
  
  it('Deal list Page', async function () {
    await driverutils.goToPath(driver,'/pickup/1/deals');
    const page = new HomePage(driver)
    await page.isLoaded();
  
  })

  it('SignPage', async function () {
    const page = new SignPage(driver)
    await driverutils.goToPath(driver,page.getUrl());
    await page.isLoaded();

  })

  it('AboutPage', async function () {
    const page = new AboutPage(driver)
    await driverutils.goToPath(driver,page.getUrl());
    await page.isLoaded();

  })

  it('SignPage', async function () {
    const page = new SignPage(driver)
    await driverutils.goToPath(driver,page.getUrl());
    await page.isLoaded();

  })

  it('After Login : user page, deal page, received page, order page', async function () {
      //login
    const signPage = new SignPage(driver)
    await driverutils.goToPath(driver,signPage.getUrl());
    await signPage.signUp('97099379','191551');
   
    // User page
    let page = new UserPage(driver)
    await driverutils.goToPath(driver,page.getUrl());
    await page.isLoaded();
    await driverutils.goToPath(driver,page.getUrl());

    page = new UserDealPage(driver)
    await driverutils.goToPath(driver,page.getUrl());
    await page.isLoaded();

    page = new UserReceivedPage(driver)
    await driverutils.goToPath(driver,page.getUrl());
    await page.isLoaded();

    page = new UserOrderPage(driver)
    await driverutils.goToPath(driver,page.getUrl());
    await page.isLoaded();

    page = new CartPage(driver)
    await driverutils.goToPath(driver,page.getUrl());
    await page.isLoaded();

    page = new BasePage(driver);

    await driverutils.goToPath(driver,'/tnc');
    let is404 = await page.is404();
    assert(!is404, '/tnc should not be 404');

    await driverutils.goToPath(driver,'/privacy');
    is404 = await page.is404();
    assert(!is404, '/privacy should not be 404');
  })
  


  afterEach(async function () {
    await driver.sleep(100)
  })


  after(async function() {

    await driverBuilder.quit()
  });
})
