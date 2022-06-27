import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TwoComponent } from './two/two.component';
// import { TaskComponent } from '../core/components/task/task.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatOptgroup, MatOption } from '@angular/material/core';



@NgModule({
  declarations: [
    TwoComponent,
    // TaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    // MatOptgroup,
    // MatOption,
    

    
  ]
})
export class FeaturesModule { }
