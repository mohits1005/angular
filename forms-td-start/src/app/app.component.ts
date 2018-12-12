import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-td-start';
  default_question = 'pet';
  answer ='';
  genders = ['male','female'];
  suggestUserName(){
    const suggestUserName= 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestUserName,
    //     email:''
    //   },
    //   secret:'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({userData: {
      username: suggestUserName
    }});
  }
  @ViewChild('f') signupForm: NgForm;
  // onSubmit(form: NgForm){
  //   console.log(form);
  // }
  onSubmit(){
    console.log(this.signupForm);
  }


}
