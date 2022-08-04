import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Address } from 'src/app/models/Address';

@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.component.html',
  styleUrls: ['./address-modal.component.scss']
})
export class AddressModalComponent implements OnInit{

  @Input() address!: Address
  addressForm!: FormGroup;

  numberPattern: string = '^[0-9]+$';

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      City: [this.address.City, { validators: [Validators.required], updateOn: 'change' }],
      Street: [this.address.Street, { validators: [Validators.required], updateOn: 'change' }],
      Number: [this.address.Number, { validators: [Validators.required], updateOn: 'change' }],
      ZipCode: [this.address.ZipCode, { validators: [Validators.required, Validators.pattern(this.numberPattern)], updateOn: 'change' }]
    });
  }


  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {
    
  }
  

}
