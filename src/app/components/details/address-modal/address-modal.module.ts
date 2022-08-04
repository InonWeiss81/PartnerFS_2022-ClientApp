import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AddressModalComponent } from "./address-modal.component";

@NgModule({
    declarations: [
        AddressModalComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ]
})
export class AddressModalModule {}