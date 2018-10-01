// @flow
const baseUrl = 'https://www.neigbuy.com'

export default {
  async goToHome (driver: WebDriverClass): Promise<void> {
    return driver.get(baseUrl)
  },
  async goToPath (driver: WebDriverClass,path:String): Promise<void> {
    return driver.get(baseUrl+path)
  }
}
