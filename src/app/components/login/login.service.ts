import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Customer } from "src/app/models/Customer";
import { ServerApiResponse } from "src/app/models/serverApiResponse";
import { environment } from "src/environments/environment";

@Injectable()
export class LoginService {

    customerDetails: BehaviorSubject<Customer | string> = new BehaviorSubject<Customer | string>('');

    getCustomerDetails(idNumber: string) {
        let url = environment.EndPointBaseUrl + environment.EndPointControllerRoute + environment.EndPointGetCustomerDataRoute;
        this.http.post<ServerApiResponse>(url, idNumber, { responseType: 'json', headers: { 'content-Type': 'application/json' } }).subscribe(
            data => {
                if (data.IsError) {
                    this.customerDetails.next(data.Message);
                }
                else {
                    let customer = JSON.parse(data.Message) as Customer;
                    this.customerDetails.next(customer);
                }
            }
        );
    }


    constructor(private http: HttpClient) { }
}

