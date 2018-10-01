// @flow
import { By } from 'selenium-webdriver'
import BasePage from './BasePage'

const SEARCH_BUTTON = By.css('#site-header button.hidden-sm-down')
const TITLE = By.css('.site-content h1')
const PICKUP_BTN = By.css('.pickupBtn') 
const COMER_BTN = By.css('.NewComerIntro button')
const SEARCH_BOX = By.css('#site-header form input[type="text"]')
const SEARCH_SUBMIT_BUTTON = By.css('#site-header form button[type="submit"]')

const DEAL_LISTS = By.css('.DealListCard');
const DEAL_LISTS_BAR = By.css('.DealListNavBar');
const WHATSAPP = By.css('.whatsapp');
const CART_ICON = By.css('.cart-widget'); 

const SLEEPCOUNT = 500;
export default class HomePage extends BasePage {

  async isLoaded () {
    await this.waitForDisplayed(DEAL_LISTS)
    await this.waitForDisplayed(DEAL_LISTS_BAR)
    await this.waitForDisplayed(WHATSAPP)
    await this.waitForDisplayed(CART_ICON)
  }

  async getTitle () {
    return this.getText(TITLE)
  }
  async clickComerBtn () {
    await this.click(COMER_BTN)
    await this.driver.sleep(SLEEPCOUNT);
    
  }
  async clickPickupBtn () {
    await this.waitForDisplayed(PICKUP_BTN)
    await this.click(PICKUP_BTN)
    await this.driver.sleep(SLEEPCOUNT);
  }
  
  async clickPickupConfirm () {
    const btn = By.css('.pickup-confirm button')
    await this.waitForDisplayed(btn)
    await this.click(btn);
    await this.driver.sleep(SLEEPCOUNT);
  }

  async hasDealPickupSelect () {
    await this.waitForDisplayed(By.css('.DealPickupSelect'))
    await this.driver.sleep(SLEEPCOUNT);
  }

  async changePickupPoint(row){
    await this.clickPickupBtn();
    await this.click(By.css(`div.DealPickupSelect label:nth-child(${row})`));
    const a = await this.isNotExist(By.css(`div.DealPickupSelect label`));
    await this.driver.sleep(SLEEPCOUNT);

  }
  async clickCartIcon(row:string){
    const cartIcon= By.css('.CartAddShortButton:nth-child('+row+') button');
    await this.click(cartIcon);
    await this.driver.sleep(SLEEPCOUNT);
  }

  


}
