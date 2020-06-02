import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ProjetService} from '../../../services/projet.service';
import {PostulationService} from '../../../services/postulation.service';
import {Postulation} from './postulation';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {
  private x: Postulation;
  private pr: Postulation;

  constructor(public dialogRef: MatDialogRef<PostulerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private postulerService: PostulationService) { }

  ngOnInit() {
    this.pr = this.getFreelancerPostule(this.data.id);
  }
  getFreelancerPostule(id: string) {
    /*this.projetService.getArticleByMatricule(id).forEach(value => {this.x = value; } );
    return this.x;*/
    this.postulerService.getFreelancer(id).subscribe(value => { this.x = value; console.log(value.id)});
    console.log(id);
    return this.x;
  }
}
