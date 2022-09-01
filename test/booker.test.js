const { expect } = require('chai');
const axios = require('axios').default;

describe('Testing restful-booker API', function () {
  
  it('Check api health', async () => {
    const response = await axios.get('https://restful-booker.herokuapp.com/ping'); 
    
    expect(response.status).to.equal(201);
  });
  
  it('get Auth token', async () => {
      const response = await axios.post('https://restful-booker.herokuapp.com/auth',{ headers: {
        accept: 'application/json'
      }},
      {
        username: 'admin',
        password: 'password123'
      }); 
      
      expect(response.status).to.equal(200);
      expect(response.data.token).to.not.equal(null);
  });

  it('get Bookings id', async () => {
    const response = await axios.get('https://restful-booker.herokuapp.com/booking'); 
    
    expect(response.status).to.equal(200);
    expect(response.data.token).to.not.equal(null);
  });

  it('get Booking', async (id = 1518) => {
    const response = await axios.get(`https://restful-booker.herokuapp.com/booking/1`, { headers: {
      'Accept': 'application/json'
    }}); 
    
    expect(response.status).to.equal(200);
    // expect(response.data.firstname).to.equal('Guoqiang');
  });

  it('create booking', async () => {
    const response = await axios.post('https://restful-booker.herokuapp.com/booking',  
    { headers: {
      'Content-Type': 'application/json'
    }}, 
    {
      "firstname" : "Jim",
      "lastname" : "Brown",
      "totalprice" : 111,
      "depositpaid" : true,
      "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
      },
      "additionalneeds" : "Breakfast"
    }); 
    
    expect(response.status).to.equal(200);
    expect(response.data.firstname).to.equal("Jim");
  });

  it.only('partial update booking', async () => {
    const response = await axios.post('https://restful-booker.herokuapp.com/booking/1518', { headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Cookie': 'token=dcf550a53227dd3'
    }}, 
    {
      firstname : 'Pepe',
      lastname : 'Joe'
    }); 
    
    expect(response.status).to.equal(200);
    expect(response.data.firstname).to.equal("Pepe");
  });

  it('delete Booking by id', async () => {
    const response = await axios.delete('https://restful-booker.herokuapp.com/booking/10', { headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cookie': 'token=dcf550a53227dd3'
    }}); 
    
    expect(response.status).to.equal(201);
  });
});