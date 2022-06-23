import { RoleService } from './../../../services/role.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { getRole } from '../../../Interfaces/getrole';

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
  roleValues!:getRole[]
  constructor(private fb:FormBuilder,private roleservice:RoleService) { }

  ngOnInit(): void {

  this.roleValues=this.roleservice.roleValues
  }


}
