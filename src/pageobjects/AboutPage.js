// @flow
import { By } from 'selenium-webdriver'
import BasePage from './BasePage'


const NAV_BAR = By.css('.navbar');

const URL ='/aboutus/';

const SLEEPCOUNT = 500;
export default class AboutPage extends BasePage {
 
   this

  async isLoaded () {
    await this.waitForDisplayed(NAV_BAR)
  }

  getUrl(){
      return URL;
  }

 

}
