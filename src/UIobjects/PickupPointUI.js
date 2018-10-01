// @flow
import { By } from 'selenium-webdriver'
import BasePage from '../pageobjects/BasePage'
import { assert } from 'chai'

const PICKUP_BTN = By.css('.pickupBtn') ;
const SELECTOR = By.css('div.DealPickupSelect') ;
const PICKUP_TOOL_TIP = By.css('.pickupBtn .tooltip')

const SLEEPCOUNT = 300;

export default class PickupUI extends BasePage {

  async isLoaded () {
    await this.waitForDisplayed(PICKUP_BTN)
  }
  
  async hasToolTips(){
    await this.waitForDisplayed(PICKUP_TOOL_TIP)

  }

  async isDealPickupSelectOpen(){
    const ele = await this.driver.findElement(SELECTOR);
    const size = await ele.getSize(); 
    const h = size.height;

    if(h == 0){
      return false;
    }
    return true;
  }

  async clickPickupBtn () {
    await this.waitForDisplayed(PICKUP_BTN)
    await this.click(PICKUP_BTN)
    await this.driver.sleep(SLEEPCOUNT); 
    const isOpen =  await this.isDealPickupSelectOpen() ;
    assert(isOpen,'pickup selecter should  be open');
  }
  
  async clickPickupConfirm () {
    const btn = By.css('.pickup-confirm button')
    await this.waitForDisplayed(btn)
    await this.click(btn);
    await this.driver.sleep(SLEEPCOUNT);
  }

  async hasDealPickupSelect () {
    await this.waitForDisplayed(SELECTOR)
    await this.driver.sleep(SLEEPCOUNT);
  }

  async changePickupPoint(row){
    await this.clickPickupBtn();
    await this.click(By.css(`div.DealPickupSelect label:nth-child(${row})`));
    await this.driver.sleep(SLEEPCOUNT);
  }

  async access () {
    await this.isLoaded ();
    await this.changePickupPoint(2);
    await this.waitForDisplayed(By.css('.userBtn'));
    const url = await this.driver.getCurrentUrl();
    assert.match(url, /pickup\/3\/deals/,'url not OK');
    const title = await this.getText(By.css('.DealListNavBar .pickup span'));
    assert.match(title, /荔枝角青山道702-704/,'title not OK');
    const isClose = await this.isDealPickupSelectOpen() == false;
    assert(isClose,'pickup selecter should  be close');
    const intro = await this.driver.manage().getCookie('pickup-selected-pickup');
    assert(intro.value==3,"cookie pickup-selected-pickup should be 3")

  }


}
