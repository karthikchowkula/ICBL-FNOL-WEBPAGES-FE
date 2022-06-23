import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup, Validators} from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';



@Component({
  selector: 'app-assistance-req-form',
  templateUrl: './assistance-req-form.component.html',
  styleUrls: ['./assistance-req-form.component.scss']
})
export class AssistanceReqFormComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  //position = new FormControl(this.positionOptions[0]);
  assistanceform:FormGroup=this.fb.group({ 
  username:new FormControl('', [Validators.required]),
  policynumber:new FormControl('', [Validators.required]),
  typeofrequest:new FormControl('', [Validators.required]),
  notes:new FormControl('', [Validators.required]),
  telephone:new FormControl('', [Validators.required]),
  vehicleregno:new FormControl('', [Validators.required]),
  location:new FormControl('', [Validators.required]),
  });
  
  
  constructor(public fb:FormBuilder) { 
   
  }

  ngOnInit(): void {
    
  }

}


