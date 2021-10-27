import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment6',
  templateUrl: './assignment6.component.html',
  styleUrls: ['./assignment6.component.css']
})
export class Assignment6Component implements OnInit {

  @ViewChild('f') signUpForm: NgForm;
  subscriptionDefault: string = 'Advanced';
  formSubmitted: boolean = false;
  formValues = {
    email: '',
    psswd: '',
    subsc: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // console.log('form: ',this.signUpForm)
    if(this.signUpForm.valid) {
      console.log('Form is valid.');
      this.formValues.email = this.signUpForm.form.value.email;
      this.formValues.psswd = this.signUpForm.form.value.password;
      this.formValues.subsc = this.signUpForm.form.value.subscription;
      console.log('email: ',        this.formValues.email);
      console.log('password: ',     this.formValues.psswd);
      console.log('subscription: ', this.formValues.subsc);
      this.formSubmitted = true;
      this.signUpForm.reset();
    }
  }

}
