import { Injectable } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
Free:Observable <any> 
freelancer:AngularFirestoreDocument<any>;
private dbPath = '/Freelancer';
freelancercat: AngularFirestoreCollection<any>=null;
  constructor(public free: AngularFirestore) { 
    this.freelancercat=free.collection(this.dbPath);
  }
  fcli :FormGroup=new FormGroup({
    
    mail:new FormControl(''),
    
    password:new FormControl(''),
    cpassword:new FormControl(''),
   
    tel:new FormControl(),
    client:new FormControl(''),
    accept:new FormControl(false) 
    

  });
  ffree:FormGroup=new FormGroup({
    $mail:new FormControl(''),
    nom:new FormControl(''),
    prenom:new FormControl(''),
    password:new FormControl(''),
    cpassword:new FormControl(''),
    genre:new FormControl(0),
    tel:new FormControl(),
    accept:new FormControl(false),
    reclamation:new FormControl(0),
    point:new FormControl(0),
    img:new FormControl(''),
  });
  ffreec:FormGroup=new FormGroup({
    $id: new FormControl('null'),
    domaine : new FormControl(''),
  })
  addfreelancer(Freelancer){
    this.freelancercat.add({
      email:Freelancer.$mail,
      image:Freelancer.img,
      nbr_reclamation:Freelancer.reclamation,
      nom:Freelancer.nom,
      password:Freelancer.password,
      point:Freelancer.point,
      prenom:Freelancer.prenom,
      sexe:Freelancer.genre,
      telephone:Freelancer.tel,
    })
  }
}
