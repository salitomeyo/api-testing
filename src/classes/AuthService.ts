import { HttpRequests } from "../helpers/HttpRequests";

export class AuthService{
    private token: string

    constructor( 
        private http: HttpRequests
    ){
        this.token = '';
    }

    getToken() {
        console.log(this.token);
        return this.token;
    }

    async getTokenAuth(username, password) {
        const { data, status } = await this.http.post('https://restful-booker.herokuapp.com/auth', {
            "username" : "admin",
            "password" : "password123"
        }, { 
            "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }});

        console.log(data);
        this.token = `token=${data.token}`;
        return { data, status };
    }
}
