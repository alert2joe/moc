// @flow
import { By } from 'selenium-webdriver'
import BasePage from './BasePage'


const NAV_BAR = By.css('.page .UserOrderNavBar');
const CONTENT = By.css('.page .card');
const URL ='/user/order';

const SLEEPCOUNT = 500;
export default class UserOrderPage extends BasePage {

  async isLoaded () {
    await this.waitForDisplayed(NAV_BAR)
    await this.waitForDisplayed(CONTENT)
  }

  getUrl(){
      return URL;
  }

 

}
