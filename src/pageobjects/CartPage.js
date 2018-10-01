// @flow
import { By } from 'selenium-webdriver'
import BasePage from './BasePage'


const NAV_BAR = By.css('.page .CartNavBar');

const URL ='/cart';

const SLEEPCOUNT = 500;
export default class CartPage extends BasePage {

  async isLoaded () {
    await this.waitForDisplayed(NAV_BAR)

  }

  getUrl(){
      return URL;
  }

 

}
