import { FileController } from "../helpers/FileController";
import { HttpRequests } from "../helpers/HttpRequests";
import { LoginInfo } from "../models/interfaces";

export class AuthService{
    
    constructor( 
        private http: HttpRequests,
        private fileController: FileController,
    ){}

    async getTokenAuth( loginInfo: LoginInfo) {

        const { data, status } = await this.http.post('https://restful-booker.herokuapp.com/auth', loginInfo, { headers: {
            accept: 'application/json'
        }});

        this.fileController.createFile('.env', `TOKEN="${data.token}"`);

        return { data, status };
    }
}
