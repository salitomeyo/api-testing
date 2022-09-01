import { HttpRequests } from "../helpers/HttpRequests";

export class ApiHealthService{

    constructor( private http: HttpRequests ){}

    async getApiHealth() {
        const { data, status } = await this.http.get('https://restful-booker.herokuapp.com/ping');


        return { data, status };
    }
}
