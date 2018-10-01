

export default class Cookie  {
    driver: WebDriverClass

    constructor (webdriver: WebDriverClass) {
      this.driver = webdriver
    }
    async addIntro(){
        await this.driver.manage().addCookie({
            name: 'app-intro',
            value: '1',
            domain : "www.neigbuy.com"
          });
          await this.driver.get( this.driver.getCurrentUrl() )
          
    }

    async addSelectedPickup(value){
        await this.driver.manage().addCookie({
            name: 'pickup-selected-pickup',
            value: value,
            domain : "www.neigbuy.com"
          });
          await this.driver.get( this.driver.getCurrentUrl() )
          
    }
    

}