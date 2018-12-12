import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "forms-reactive-start";
  genders = ["male", "female"];
  signupForm: FormGroup;
  
}
