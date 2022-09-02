import { BookingDates, BookingId, BookingInfo, LoginInfo } from "./interfaces";

export class DataTransform {
    async toLoginInfo(username: string, password: string) {
        const loginInfo: LoginInfo = { username, password};

        return loginInfo;
    }

    async toBookingDates(checkin: string, checkout: string) {
        const bookingDates: BookingDates = { checkin, checkout };

        return bookingDates;
    }

    async toBookingId( bookingid: number ) {
        const bookingId: BookingId = { bookingid };

        return bookingId;
    }

    async toBookingInfo(firstname: string, lastname: string, totalprice: number, depositpaid: boolean, bookingdates: BookingDates, additionalneeds: string) {
        const bookingInfo: BookingInfo = { firstname, lastname, totalprice, depositpaid, bookingdates, additionalneeds};

        return bookingInfo;
    }

    async toHeaders(contentType: string, accept: string, cookie: string ) {
        // const headers: Headers = { "Content-Type": contentType, "Accept": accept, "Cookie": cookie}

    }
}