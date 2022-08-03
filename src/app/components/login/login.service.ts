import { HttpClient, HttpHeaders, HttpStatusCode } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class LoginService {

    getCustomerDetails(idNumber: string) {
        let url = environment.EndPointBaseUrl + environment.EndPointControllerRoute + environment.EndPointGetCustomerDataRoute;
        this.http.post<LoginApiResponse>(url, idNumber, { responseType: 'json', headers: { 'content-Type': 'application/json' } }).subscribe(
            data => {
                console.log(data);
            }
        );
    }

    constructor(private http: HttpClient) { }
}

interface LoginApiResponse {
    StatusCode: HttpStatusCode;
    IsError: boolean;
    Message: string;
}