import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  checkoutForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private http: HttpClient
    ) {
      this.checkoutForm = this.formBuilder.group({
        username: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        topic: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),

      });
    }


  title = 'tdfForm';
  topics = ['Administrator', 'Student', 'Employee'];

  userModel = new User('John Doe', 'abcd@gmail.com', '1212121212','','','abcd');

  onSubmit() {
    console.log(this.checkoutForm.value)
    this.http.post('http://localhost:3/register', this.checkoutForm.value).subscribe(res => {
      console.log('res: ', res);
    }, fail => {
      console.log('fail: ', fail);
    }); 
    this.checkoutForm.reset();
  }

}




// topicHasError = true;
  // onSubmit(){
  //   console.log(this.userModel)
  // }


  // validateTopic(value){
  //   if(value === "default"){
  //     this.topicHasError = true;
  //   }else{
  //     this. topicHasError = false
  //   }

  // }



   
  // checkoutForm: FormGroup;

  // constructor(
  //   private formBuilder: FormBuilder,
  //   private http: HttpClient
  // ) {
  //   this.checkoutForm = this.formBuilder.group({
  //     username: new FormControl('', [Validators.required]),
  //     password: new FormControl('', [Validators.required])
  //   });
  // }

  

  // ngOnInit() {
  //   // this.onSubmit();
  // }