import { HttpRequests } from "../helpers/HttpRequests";
import { LoginInfo } from "../helpers/interfaces";

export class AuthService{
    private token: string

    constructor( 
        private http: HttpRequests
    ){
        this.token = '';
    }

    getToken() {
        return this.token;
    }

    async getTokenAuth( loginInfo: LoginInfo) {

        const { data, status } = await this.http.post('https://restful-booker.herokuapp.com/auth', loginInfo, { headers: {
            accept: 'application/json'
        }});

        this.token = `token=${data.token}`;
        return { data, status };
    }
}
