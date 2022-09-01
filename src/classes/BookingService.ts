import { HttpRequests } from "../helpers/HttpRequests";

export class BookingService{
    constructor( private http: HttpRequests ){}

    async getBookingIds() {
        const { data, status } = await this.http.get('https://restful-booker.herokuapp.com/ping');
        
        return { data, status };
    }

    async getBookingById( id: number ) {
        const { data, status } = await this.http.get(`https://restful-booker.herokuapp.com/booking/${ id }`, { headers: {
            'Accept': 'application/json'
        }});

        return { data, status };
    }

    async deleteBookingById( id: number, token: string ) {
        const { data, status } = await this.http.delete(`https://restful-booker.herokuapp.com/booking/${ id }`, { headers: {
            'Content-Type': 'application/json',
            'Cookie': token,
        }});

        return { data, status };
    }

    async createBooking( booking: Object ) {
        const { data, status } = await this.http.post('https://restful-booker.herokuapp.com/booking',  
            booking,
            { headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }}
        );

        return { data, status };
    }
}
