import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';
import { RoleService } from 'src/app/core/services/role.service';
import { getRole } from '../../../Interfaces/getrole';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
  edituserForm:FormGroup=this.fb.group({
    username: new FormControl('', [Validators.required]),
    email:new FormControl('',([Validators.required,Validators.email])),
    phonenumber:new FormControl('',[Validators.required]),
    role:new FormControl('',Validators.required)
   })
   roleValues!:getRole[]
  constructor(private fb:FormBuilder,private roleservice:RoleService) { }

  ngOnInit(): void {
   this.roleValues=this.roleservice.roleValues
   console.log(this.roleValues)
  }

}
