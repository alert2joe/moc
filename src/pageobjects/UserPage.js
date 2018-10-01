// @flow
import { By } from 'selenium-webdriver'
import BasePage from './BasePage'


const NAV_BAR = By.css('.page .navbar');
const ORDERLINK = By.css('.page .UserOrderLink');
const URL ='/user';

const SLEEPCOUNT = 500;
export default class UserPage extends BasePage {
 
  async isLoaded () {
    await this.waitForDisplayed(NAV_BAR)
    await this.waitForDisplayed(ORDERLINK)
  }

  getUrl(){
      return URL;
  }

 

}
