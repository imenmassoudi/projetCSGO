import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  description = 'Angular-Fire-Demo';
  itemValue = '';
  prenom = ''
  users: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.users = db.list('users').valueChanges();
  }
 
  onSubmit() {
    this.db.list('users').push({ nom: this.itemValue,prenom:this.prenom});
    this.itemValue = '';
    this.prenom = '';
  }
}
