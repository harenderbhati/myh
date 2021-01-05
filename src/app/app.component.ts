import { Component, Input,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import  * as firebase from 'firebase';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myh';
  description ='Angular-Fire-Demo';

  itemvalue = '';
  item :  Observable<any[]>;
  
  otpSent: boolean = false
  phoneNumber = null
  otp = null

  constructor( ){
  
  }
  ngOnIt(){

  }
    sendOtp(){
      console.log(this.phoneNumber)
      
      firebase.auth().signInWithPhoneNumber('+91' + this.phoneNumber,)
.then((confirmationResult) => {
// SMS sent. Prompt user to type the code from the message, then sign the
// user in with confirmationResult.confirm(code).
this.otpSent = true;
}).catch(err => {
console.log(err)
})
}
    
    signIn(){
      console.log(this.otp )
    }
    
  }
