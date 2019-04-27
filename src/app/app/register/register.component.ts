import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Customer } from "../../modules/Customer";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})


export class RegisterComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required,
      Validators.pattern("A-Za-z")
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.pattern("A-Za-z")
    ]),
    email: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    password: new FormControl(null, [Validators.required,Validators.minLength(6)]),
    confirmpassword: new FormControl(null ),
    gender: new FormControl(null, [Validators.required])
  });
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  firstNameInValid() {
    return this.form.get("firstName").invalid;
  }

  lastNameInValid() {
    return this.form.get("lastName").invalid;
  }

  emailInValid() {
    return this.form.get("email").invalid;
  }

  passwordInValid() {
    return this.form.get("password").invalid;
  }

  signup() {
    if (
      !(this.firstNameInValid() && this.lastNameInValid() && this.emailInValid() && this.passwordInValid())
    ) {
      console.log(
        this.form.get("firstName").value + " " + this.form.get("city").value
      );
      let customer: Customer = {
        name: this.form.get("firstName").value,
        address: this.form.get("address").value,
        city: this.form.get("city").value,
        district: this.form.get("district").value,
        mobileno: this.form.get("mobileno").value,
        email: this.form.get("email").value,
        password: this.form.get("password").value,
        gender: this.form.get("gender").value

      };
      console.log(customer);
      this.authService.signup(customer);
    }
    // console.log(this.form);
   
   }
}