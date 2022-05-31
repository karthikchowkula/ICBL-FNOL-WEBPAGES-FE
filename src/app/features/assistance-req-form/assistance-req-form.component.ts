import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup} from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { throws } from 'assert';


@Component({
  selector: 'app-assistance-req-form',
  templateUrl: './assistance-req-form.component.html',
  styleUrls: ['./assistance-req-form.component.scss']
})
export class AssistanceReqFormComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  //position = new FormControl(this.positionOptions[0]);
  assistanceform:FormGroup=this.fb.group({ 
  username:[''],
  policynumber:[''],
  typeofrequest:[''],
  notes:[''],
  telephone:[''],
  vehicleregno:[''],
  location:[''], 
  });
  
  
  constructor(public fb:FormBuilder) { 
   
  }

  ngOnInit(): void {
    
  }

}


