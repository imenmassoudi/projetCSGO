import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { DEMOCRUDComponent } from './demo-crud/demo-crud.component';
import { AccueilComponent } from './visiteur/accueil/accueil.component';
import { ContactComponent } from './visiteur/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjetComponent } from './classe/projet/projet.component';



@NgModule({
  declarations: [
    AppComponent,
    DEMOCRUDComponent,
    AccueilComponent,
    ContactComponent,
    ProjetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
