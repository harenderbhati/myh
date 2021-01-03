import { Component } from '@angular/core';
import { AngularFireDatabase } from '@ngular/fire/database';
import { AngularFireDatabase } from '@ngular/fire/database';
import { Observable } from 'rxjs';
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

  constructor( public bd : AngularFireDatabase){
    this.item =db.list( 'item').valuechange()
  }
    
  }
