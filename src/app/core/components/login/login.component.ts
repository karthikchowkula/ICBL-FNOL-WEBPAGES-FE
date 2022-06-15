import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_SCROLL_STRATEGY_FACTORY } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl, Form } from '@angular/forms';
import { AuthenticationServiceService } from '../../services/authentication-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup=this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(12)])
  })
  constructor(private router:Router,private fb:FormBuilder,private authservice:AuthenticationServiceService) { }

  ngOnInit(): void {
    console.log("login componentS")
    
  }

  //loginSubmit function=access details from login form and send to backend using authentications service.And will check loginForm is valid or not

loginSubmit(){
             
debugger
          if(this.loginForm.valid){ 
            let email=this.loginForm.get('email')?.value
            let password=this.loginForm.get('password')?.value
            this.authservice.login(email,password)
          }

      
}
forgotpassword(){
  this.router.navigateByUrl('/resetpass')
}
  
}
