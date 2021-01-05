import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import  * as firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCOeyKL0hJ253A_GWaiyzZkFTnmHhLNoU",
    authDomain: "myh-angular-firebase.firebaseapp.com",
    projectId: "myh-angular-firebase",
    storageBucket: "myh-angular-firebase.appspot.com",
    messagingSenderId: "786272115424",
    appId: "1:786272115424:web:dad072b087d797c41d0e85",
    measurementId: "G-4RJV1KWS9X"
  };

  firebase.default.initializeApp(firebaseConfig);

@NgModule({
    declarations: [
        AppComponent
        
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase, 'fcc-book-trading'),
        AngularFireDatabaseModule,
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
