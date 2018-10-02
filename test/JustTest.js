// @flow
import { assert } from 'chai'

import Cookie from '../src/Classes/Cookie';
import UserModel from '../src/model/UserModel';
import MaskPage from '../src/pageobjects/MaskPage';
import DriverBuilder from '../src/lib/DriverBuilder'
import driverutils from '../src/lib/driver-utils'


describe('Just Tests function', function () {
  let driverBuilder
  let driver

  before(async function() {
//    driverBuilder = new DriverBuilder();

  });

  beforeEach(async function () {

  })
  
  it('just test refresh function', async function () {
    const User = new UserModel();
    await User.getConnection();
    await User.run('TRUNCATE `user`');
    const a = await User.getData('user');
    console.log('TRUNCATE Table =>',a);
    await User.refresh();
    const b = await User.getData('user');
    console.log('after refresh()=>',b);
  })




  afterEach(async function () {
    
    //await driverBuilder.quit()
  })


  after(async function() {

  });
})
