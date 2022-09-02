import { FileController } from "./FileController";
import { BookingId, BookingInfo } from "../models/interfaces";

export class DataHelper {

    constructor( private fileController: FileController ) {}

    randomize( max: number ): number {
        return Math.floor(Math.random() * max);
    }

    getRandomIdfromFile( path: string ): number {
        const idsList: BookingId[] = (JSON.parse(this.fileController.readFile(path))).data;

        return (idsList[this.randomize(idsList.length-1)]).bookingid;
    }

    getRandomBookingFromFile( path: string ): BookingInfo {
        const bookingsList: BookingInfo[] = (JSON.parse(this.fileController.readFile(path))).data;

        return (bookingsList[this.randomize(bookingsList.length-1)]);
    }
}