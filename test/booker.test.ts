import { getToken } from "../src/booker/getAuth";
// import { checkApiHealth } from "../src/booker/getHealth";
const { expect } = require('chai');
const { checkApiHealth } = require('../src/booker/getHealth');


describe('Testing restful-booker API', function () {
  
  it('Check api health', async() => {
    const response = await checkApiHealth();

    expect(response.status).to.equal(201); 
  });

  it('Check api health', async () => {
    const response = await getToken('admin', 'password123');

    expect(response.status).to.equal(201); 
  });
});