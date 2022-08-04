import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from './login.service';
import { LoginValidators } from './login.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;

  idNumberPH = 'מספר ת.ז...';
  idNumberPattern = "^[0-9]+$";

  loginSub: Subscription = new Subscription();
  formSubmitted: boolean = false;

  ngOnInit(): void {
    sessionStorage.clear();
    this.loginSub = this.loginService.customerDetails.subscribe(
      data => {
        if (typeof(data) == 'string') {
          if ((data as string).length > 0) {
            alert(data);
          }
        }
        else {
          if (this.formSubmitted) {
            sessionStorage.setItem('customerDetails', JSON.stringify(data));
            this.router.navigate(['/details']);
          }
        }
      }
    );
  }

  private get controlsObject(): {} {
    return {
      idNumber: [
        '',  { 
          validators: [Validators.required, Validators.pattern(this.idNumberPattern), LoginValidators.ValidateIdNumber],
          updateOn: 'change'
        }]
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      let idNum = this.loginForm.get('idNumber')?.value as string;
      this.loginService.getCustomerDetails(idNum);
      this.formSubmitted = true;
    }
  }


  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
    this.loginForm = this.fb.group(this.controlsObject);
  }

  ngOnDestroy(): void {
    this.loginSub.unsubscribe();
  }


}
