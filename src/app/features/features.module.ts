import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TwoComponent } from './two/two.component';



@NgModule({
  declarations: [
    TwoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    
  ]
})
export class FeaturesModule { }
