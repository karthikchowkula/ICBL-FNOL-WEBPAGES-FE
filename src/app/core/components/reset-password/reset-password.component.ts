import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent  {
resetForm:FormGroup=this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    
  })
  constructor(private router:Router,private fb:FormBuilder,private apiservice:ApiService) { }

  ngOnInit(): void {
    console.log("login componentS")
    
  }
reset(){
  debugger
  if(this.resetForm.valid){
    let email=this.resetForm.get('email')?.value;
    this.apiservice.resetpassword(email).subscribe(res=>{
      console.log(res)
    })
  }
}
}
