import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  adduserForm:FormGroup=this.fb.group({
   name: new FormControl('', [Validators.required]),
   email:new FormControl('',([Validators.required,Validators.email])),
   phonenumber:new FormControl('',[Validators.required]),
   password:new FormControl('',[Validators.required,Validators.minLength(12)]),
   confirmpassword:new FormControl('',[Validators.required,Validators.minLength(12)]),
   role:new FormControl('',Validators.required)
  })
  constructor(private fb:FormBuilder,private apiservice:ApiService) { }

  ngOnInit(): void {
this.apiservice.getApp().subscribe(res=>{
  console.log(res)
})
  }


}
