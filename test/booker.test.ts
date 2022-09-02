import { HttpRequests } from "../src/helpers/HttpRequests";
import { Assertions } from "../src/helpers/Assertions";
import { ApiHealthService } from "../src/classes/ApiHealthService";
import { AuthService } from "../src/classes/AuthService";
import { BookingService } from "../src/classes/BookingService";
import { FileController } from "../src/helpers/FileController";
import { DataHelper } from "../src/helpers/DataHelper";

describe('Testing restful-booker API', function () {
  
    const http = new HttpRequests();
    const fileController = new FileController();
    const assertion = new Assertions();
    const apiHealth = new ApiHealthService(http);
    const auth = new AuthService(http);
    const booking = new BookingService(http, fileController);
    const dataHelper = new DataHelper(fileController);

    it('Check api health', async () => {
        const {data , status} = await apiHealth.getApiHealth();

        assertion.helperExpect(status).to.equal(201);
        assertion.helperExpect(data).to.equal('Created');
    });

    it('get Auth token', async () => {
        const { data, status } = await auth.getTokenAuth({username: "admin", password: "password123"}); 
        
        assertion.helperExpect(status).to.equal(200);
        assertion.helperExpect(data.token).to.not.be.null;
    });

    it('get Bookings id', async () => {
        const { data, status } = await booking.getBookingIds(); 
        
        assertion.helperExpect(status).to.equal(200);
    });
    
    it('get Booking', async () => {
        const randomId = dataHelper.getRandomIdfromFile(`./src/data/bookingIds.json`);

        const { data, status } = await booking.getBookingById(randomId);
        
        assertion.helperExpect(status).to.equal(200);
    });
    
    it('delete Booking by id', async () => {
        const randomId = dataHelper.getRandomIdfromFile(`./src/data/bookingIds.json`);

        const { data, status } = await booking.deleteBookingById(randomId, auth.getToken() );
        
        assertion.helperExpect(status).to.equal(201);
    });
    
    it('Create booking', async () => {
        const randomBooking = dataHelper.getRandomBookingFromFile(`./src/data/bookings.json`);
        
        const { data, status } = await booking.createBooking(randomBooking); 
        // const { data, status } = await booking.createBooking(
        // {
        //     firstname : 'Jim',
        //     lastname : 'Brown',
        //     totalprice : 111,
        //     depositpaid : true,
        //     bookingdates : {
        //         checkin : '2018-01-01',
        //         checkout : '2019-01-01'
        //     },
        //     additionalneeds : 'Breakfast'
        // }); 
            
        assertion.helperExpect(status).to.equal(200);
        });
    
//   it('Create booking', async () => {
//     const response = await axios.post('https://restful-booker.herokuapp.com/booking',  
//     { headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     }}, 
//     {
//       firstname : 'Jim',
//       lastname : 'Brown',
//       totalprice : 111,
//       depositpaid : true,
//       bookingdates : {
//         checkin : '2018-01-01',
//         checkout : '2019-01-01'
//       },
//       additionalneeds : 'Breakfast'
//     }); 
    
//     expect(response.status).to.equal(200);
//     expect(response.data.firstname).to.equal("Jim");
//   });

//   it('delete Booking by id', async () => {
//     const response = await axios.delete('https://restful-booker.herokuapp.com/booking/527', { headers: {
//       'Content-Type': 'application/json',
//       'Cookie': 'token=49b03fb14526adc'
//     }}); 
    
//     expect(response.status).to.equal(201);
//   });
});