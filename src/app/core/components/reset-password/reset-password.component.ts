import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent  {
resetForm:FormGroup=this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    
  })
  constructor(private router:Router,private fb:FormBuilder,) { }

  ngOnInit(): void {
    console.log("login componentS")
    
  }
resetSubmit(){
  
}
}
