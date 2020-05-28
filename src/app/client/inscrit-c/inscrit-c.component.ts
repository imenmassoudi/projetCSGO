import { Component, OnInit } from '@angular/core';
import{InscriptionService}from'../../services/inscription.service'
@Component({
  selector: 'app-inscrit-c',
  templateUrl: './inscrit-c.component.html',
  styleUrls: ['./inscrit-c.component.css']
})
export class InscritCComponent implements OnInit {

  constructor(private service:InscriptionService) { }

  ngOnInit() {
  }

}
