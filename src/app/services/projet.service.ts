import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {BehaviorSubject, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Projets} from '../classe/projet';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  projets: Observable<Projets[]>;
  private dbPath = '/Projet';
  projet: Observable<Projets>;
  projetDoc: AngularFirestoreDocument<Projets>;
  projetCollection: AngularFirestoreCollection<Projets> = null;

  constructor(public afs: AngularFirestore, private db: AngularFireDatabase) {
    this.projetCollection = afs.collection(this.dbPath);
  }

  getProjets() {
    return this.projets;
  }
  getProjetsList(): AngularFirestoreCollection<Projets> {
    return this.projetCollection;
  }

  addProjet(prjt: Projets) {
      this.projetCollection.add(prjt);
      console.log(prjt);
  }
  updateProjet(prjt: Projets) {
    this.projetDoc = this.afs.doc(`Projet/${prjt.id}`);
    this.projetDoc.update(prjt);
  }
  getArticleByMatricule(id: string) {
    this.projetDoc = this.afs.doc<Projets>(`Projet/${id}`);
    return this.projet = this.projetDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Projets;
        data.id = action.payload.id;
        return data;
      }
    }));
  }
  deleteProjet(prjt: Projets) {
    this.projetDoc = this.afs.doc(`Projet/${prjt.id}`);
    console.log(this.projetDoc);
    this.projetDoc.delete();
  }
}
