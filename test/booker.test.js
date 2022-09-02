const { expect } = require('chai');
const axios = require('axios').default;


describe('Testing restful-booker API', function () {
  
   
  it('Check api health', async () => {
    const response = await axios.get('https://restful-booker.herokuapp.com/ping'); 
    
    expect(response.status).to.equal(201);
  });
  
  it('get Auth token', async () => {
      const response = await axios.post('https://restful-booker.herokuapp.com/auth',
      {
        username: 'admin',
        password: 'password123'
      },
      { headers: {
        accept: 'application/json'
      }}); 
      
      expect(response.status).to.equal(200);
      expect(response.data.token).to.not.equal(null);
  });

  it('get Bookings id', async () => {
    const response = await axios.get('https://restful-booker.herokuapp.com/booking'); 
    
    expect(response.status).to.equal(200);
    expect(response.data.token).to.not.equal(null);
  });

  it('get Booking', async () => {
    const response = await axios.get(`https://restful-booker.herokuapp.com/booking/1495`, { headers: {
      'Accept': 'application/json'
    }}); 
    
    expect(response.status).to.equal(200);
  });

  it('Create booking', async () => {
    const response = await axios.post('https://restful-booker.herokuapp.com/booking',  
    {
      firstname : 'Jim',
      lastname : 'Brown',
      totalprice : 111,
      depositpaid : true,
      bookingdates : {
        checkin : '2018-01-01',
        checkout : '2019-01-01'
      },
      additionalneeds : 'Breakfast'
    },
    { headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }}); 
    
    expect(response.status).to.equal(200);
  });

  it('delete Booking by id', async () => {
    const response = await axios.delete('https://restful-booker.herokuapp.com/booking/1495', { headers: {
      'Content-Type': 'application/json',
      'Cookie': 'token=a0df56426e95437'
    }}); 
    
    expect(response.status).to.equal(201);
  });

//   forbbiden
//   it('Update booking', async () => {
//     const response = await axios.put('https://restful-booker.herokuapp.com/booking/592',  
//     { headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//       'Cookie': 'token=49b03fb14526adc',
//     }}, 
//     {
//       "firstname" : "Jim",
//       "lastname" : "Brown",
//       "totalprice" : 111,
//       "depositpaid" : true,
//       "bookingdates" : {
//         "checkin" : "2018-01-01",
//         "checkout" : "2019-01-01"
//       },
//       "additionalneeds" : "Breakfast"
//     }); 
    
//     expect(response.status).to.equal(200);
//     expect(response.data.firstname).to.equal("Jim");
//   });

//   it('partial update booking', async () => {
//     const response = await axios.patch('https://restful-booker.herokuapp.com/booking/592', { headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//       'Cookie': 'token=49b03fb14526adc'
//     }}, 
//     {
//       firstname : 'Pepe',
//       lastname : 'Joe'
//     }); 
    
//     expect(response.status).to.equal(200);
//     expect(response.data.firstname).to.equal("Pepe");
//   });
});