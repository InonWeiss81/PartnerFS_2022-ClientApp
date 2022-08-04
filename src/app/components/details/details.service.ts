import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "src/app/models/Customer";
import { ServerApiResponse } from "src/app/models/serverApiResponse";
import { environment } from "src/environments/environment";

@Injectable()
export class DetailsService {

    updateCustomerAddress(customer: Customer) :Observable<ServerApiResponse> {
        let url = environment.EndPointBaseUrl + environment.EndPointControllerRoute + environment.EndPointUpdateCustomerAddressRoute;
        return this.http.post<ServerApiResponse>(url, customer, { responseType: 'json', headers: { 'content-Type': 'application/json' } });
    }


    constructor(private http: HttpClient) { }
}
