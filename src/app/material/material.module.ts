import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonModule,
    Material.MatGridListModule,
    Material.MatRadioModule,
    Material.MatDialogModule,
   Material.MatInputModule,
   Material.MatFormFieldModule,
   Material.MatToolbarModule,
   Material.MatButtonModule,
   Material.MatCheckboxModule,
   Material.MatRadioModule,
   Material.MatListModule,
   Material.MatOptionModule,
   Material.MatSelectModule,
   Material.MatStepperModule,
   Material.MatMenuModule,
   
   
  ],
  exports:[
    Material.MatGridListModule,
    Material.MatRadioModule,
    Material.MatDialogModule,
    Material.MatInputModule,
   Material.MatFormFieldModule,
   Material.MatToolbarModule,
   Material.MatButtonModule,
   Material.MatCheckboxModule,
   Material.MatRadioModule,
   Material.MatListModule,
   Material.MatOptionModule,
   Material.MatSelectModule,
   Material.MatStepperModule,
   Material.MatMenuModule,
   
    ]
})
export class MaterialModule { }
