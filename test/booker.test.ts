import { HttpRequests } from "../src/helpers/HttpRequests";
import { Assertions } from "../src/helpers/Assertions";
import { ApiHealthService } from "../src/services/ApiHealthService";
import { AuthService } from "../src/services/AuthService";
import { BookingService } from "../src/services/BookingService";
import { FileController } from "../src/helpers/FileController";
import { DataHelper } from "../src/helpers/DataHelper";
require('dotenv').config();

describe('Testing restful-booker API', function () {
  
    const http = new HttpRequests();
    const fileController = new FileController();

    const assertion = new Assertions();
    const apiHealth = new ApiHealthService(http);
    const auth = new AuthService(http, fileController);
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

        
        const { data, status } = await booking.deleteBookingById( randomId, process.env.TOKEN );
        
        assertion.helperExpect(status).to.equal(201);
    });
    
    it('Create booking', async () => {
        const randomBooking = dataHelper.getRandomBookingFromFile(`./src/data/bookings.json`);
        
        const { data, status } = await booking.createBooking(randomBooking);
        assertion.helperExpect(status).to.equal(200);
    });
});