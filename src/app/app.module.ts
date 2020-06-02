import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
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
import { NavbarComponent } from './visiteur/navbar/navbar.component';
import { FooterComponent } from './visiteur/footer/footer.component';
import { CarouselComponent } from './visiteur/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { InscritFComponent } from './freelancer/inscrit-f/inscrit-f.component';
import { InscritCComponent } from './client/inscrit-c/inscrit-c.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AjoutProjetComponent } from './classe/projet/ajout-projet/ajout-projet.component';
import { DetailsProjetComponent } from './classe/projet/details-projet/details-projet.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';
import { ContratComponent } from './contrat/contrat.component';
import {ToastContainerModule, ToastrModule} from 'ngx-toastr';
import { PostulerComponent } from './classe/projet/postuler/postuler.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RechercheProjetPipe } from './recherche-projet.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DEMOCRUDComponent,
    AccueilComponent,
    ContactComponent,
    ProjetComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    InscritFComponent,
    InscritCComponent,
    AjoutProjetComponent,
    DetailsProjetComponent,
    ContratComponent,
    PostulerComponent,
    RechercheProjetPipe
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
    BrowserAnimationsModule,
    MaterialModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatSnackBarModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      progressBar: true,
      positionClass: 'toast-top-left',
      closeButton: true,
      preventDuplicates: true,
    }),
    ToastContainerModule
  ],
  providers:[MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents:[InscritFComponent, InscritCComponent, AjoutProjetComponent, DetailsProjetComponent, PostulerComponent]
})
export class AppModule { }
