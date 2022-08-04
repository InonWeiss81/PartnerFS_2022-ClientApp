import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DetailsComponent } from "./details.component";
import { AddressModalModule } from "./address-modal/address-modal.module";
import { DetailsService } from "./details.service";

@NgModule({
    declarations: [
        DetailsComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        AddressModalModule
    ],
    providers: [
        DetailsService
    ]
})
export class DetailsModule { }