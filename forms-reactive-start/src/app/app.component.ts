import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "forms-reactive-start";
  genders = ["male", "female"];
  forbiddenUsernames = ["test"];
  signupForm: FormGroup;
  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required,this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email])
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([])
    });
  }
  onSubmit() {
    console.log(this.signupForm);
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(control);
  }
  forbiddenNames(control: FormControl):{[s:string]:boolean}{
    if(this.forbiddenUsernames.indexOf(control.value)){
      return {'nameIsForbidden':true};
    }
    return null;
  }
}
