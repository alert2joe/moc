// @flow
import { By } from 'selenium-webdriver'
import BasePage from './BasePage'


const NAV_BAR = By.css('.page .SignNavBar');
const LOGO = By.css('.page .logo');
const INPUT_PHONE = By.css('.page #input-phone');
const BUTTON_AREA = By.css('.page .button-container');

const LOGIN_BTN = By.css('.page .button-container button'); 
const INPUT_PW = By.css('.page #input-password'); 
const URL ='/sign';

const SLEEPCOUNT = 500;
export default class SignPage extends BasePage {
 


  async isLoaded () {
    await this.waitForDisplayed(NAV_BAR)
    await this.waitForDisplayed(LOGO)
    await this.waitForDisplayed(INPUT_PHONE)
    await this.waitForDisplayed(BUTTON_AREA)
  }


  async signUp (phone:string,pw:string) {
    await this.isLoaded();
    await this.sendKeys(INPUT_PHONE, phone)
    await this.waitForDisplayed(INPUT_PW)
    await this.sendKeys(INPUT_PW, pw);
    await this.driver.sleep(SLEEPCOUNT);
    await this.click(LOGIN_BTN);
   
  }

  getUrl(){
      return URL;
  }

 

}
