import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  changePasswordForm:FormGroup=this.fb.group({
    
    email:new FormControl('',([Validators.required,Validators.email])),
    password:new FormControl('',[Validators.required,Validators.minLength(12)]),
    confirmpassword:new FormControl('',[Validators.required,Validators.minLength(12)]),
   })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  console.log("Change password form")
  }
  

}
