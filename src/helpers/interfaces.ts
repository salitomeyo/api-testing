
export interface LoginInfo {
    username: string;
    password: string;
};

export interface BookingDates {
    checkin:  string;
    checkout: string;
}

export interface BookingId {
    bookingid: number;
}

export interface BookingInfo {
    firstname:       string;
    lastname:        string;
    totalprice:      number;
    depositpaid:     boolean;
    bookingdates:    BookingDates;
    additionalneeds: string;
};

export interface Headers {
    "Content-Type"?: string;
    "Accept"?: string;
    "Cookie"?: string;
}
