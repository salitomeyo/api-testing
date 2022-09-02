import { FileController } from "./FileController";
import { BookingId, BookingInfo } from "./interfaces";

export class DataHelper {

    constructor( private fileController: FileController ) {}

    randomize( max: number ) {
        return Math.floor(Math.random() * max);
    }

    getRandomIdfromFile( path: string ) {
        const idsList: BookingId[] = (JSON.parse(this.fileController.readFile(path))).data;

        return (idsList[this.randomize(idsList.length-1)]).bookingid;
    }

    getRandomBookingFromFile( path: string ) {
        const bookingsList: BookingInfo[] = (JSON.parse(this.fileController.readFile(path))).data;

        return (bookingsList[this.randomize(bookingsList.length-1)]);
    }
}