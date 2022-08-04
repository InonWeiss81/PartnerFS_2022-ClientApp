import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Address } from 'src/app/models/Address';
import { Contract } from 'src/app/models/Contract';
import { Customer } from 'src/app/models/Customer';
import { PackageType } from 'src/app/models/PackageType';
import { AddressModalComponent } from './address-modal/address-modal.component';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  customer: Customer | undefined;
  selectedContract: Contract | null = null;
  closeResult = '';
  modalRefSub: Subscription | undefined;

  ngOnInit(): void {
    let customerFromSS = sessionStorage.getItem('customerDetails');
    if (customerFromSS) {
      this.customer = JSON.parse(customerFromSS) as Customer;
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  selectContract(contract: Contract) {
    this.selectedContract = contract;
  }

  getPackageUnits(pType: PackageType) {
    switch (pType) {
      case PackageType.AbroadCalls:
        return 'דקות';
      case PackageType.Calls:
        return 'דקות';
      case PackageType.SMS:
        return 'הודעות';
      case PackageType.Surfing:
        return 'GB';

    }
  }

  openAddressModal() {
    const modalRef = this.modalService.open(AddressModalComponent);
    modalRef.componentInstance.address = this.customer?.Address;
    this.modalRefSub = modalRef.closed.subscribe(
      reason => {
        if (reason != 'close') {
          this.updateCustomerAddress(reason as Address);
        }
        this.modalRefSub?.unsubscribe();
      }
    );
  }

  updateCustomerAddress(address: Address) {
    if (this.customer) {
      let updatedCustomer = {...this.customer};
      updatedCustomer.Address = address;
      this.detailsService.updateCustomerAddress(updatedCustomer).subscribe(
        response => {
          if (!response.IsError) {
            this.customer = updatedCustomer;
          }
          alert(response.Message);
        }
      );
    }
  }

  
  constructor(private router: Router, private modalService: NgbModal, private detailsService: DetailsService) { }

}
