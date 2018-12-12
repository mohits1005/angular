import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "forms-reactive-start";
  genders = ["male", "female"];
  signupForm: FormGroup;
  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(null),
      email: new FormControl(null),
      gender: new FormControl("male")
    });
  }
  onSubmit(){
    console.log(this.signupForm);
  }
}
