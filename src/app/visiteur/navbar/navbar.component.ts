import { Component, OnInit } from '@angular/core';
import{MatDialog,MatDialogConfig} from '@angular/material'
import { InscritFComponent } from 'src/app/freelancer/inscrit-f/inscrit-f.component';
import { InscritCComponent } from 'src/app/client/inscrit-c/inscrit-c.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public popup:MatDialog) { }

  ngOnInit() {
  }
ffree()
{
  const config=new MatDialogConfig();
    
    config.autoFocus=true;
    config.width="77%";

    this.popup.open(InscritFComponent,config);
}
fcli(){
  const config=new MatDialogConfig();
    
  config.autoFocus=true;
  config.width="77%";

  this.popup.open(InscritCComponent,config);
}
}
