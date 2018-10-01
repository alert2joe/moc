// @flow
import { By } from 'selenium-webdriver'
import BasePage from './BasePage'
import { assert } from 'chai'

const PICKUP_BTN = By.css('.pickupBtn') 
const COMER_BTN = By.css('.NewComerIntro button')

const SLEEPCOUNT = 300;

const URL ='';

export default class MaskPage extends BasePage {

  getUrl(){
    return URL;
  }

  async isLoaded () {
    await this.waitForDisplayed(COMER_BTN)
    //await this.waitForDisplayed(SEARCH_BUTTON)
  }

  async clickComerBtn () {
    await this.click(COMER_BTN)
    await this.driver.sleep(SLEEPCOUNT);
    const isHideMask = await this.isNotExist(By.css('.NewComerIntro'));
  }

  async isIntroExist () {
    const isHideMask = await this.isNotExist(By.css('.NewComerIntro'));
    return !isHideMask;
  }

  async access () {
    await this.isLoaded ();
    await this.clickComerBtn();  
  }




}
