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
  user = {
    username:'',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''
  }
  submitted = false;
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
    // console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
  }


}
