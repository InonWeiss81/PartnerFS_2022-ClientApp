import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { LoginValidators } from './login.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  idNumberPH = 'מספר ת.ז...';
  idNumberPattern = "^[0-9]+$";

  ngOnInit(): void {
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
      // TODO - get customer details and store them in session
      this.loginService.getCustomerDetails(idNum);
      sessionStorage.setItem('idNumber', idNum);
      this.router.navigate(['/details']);
    }
  }


  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
    this.loginForm = this.fb.group(this.controlsObject);
  }


}
