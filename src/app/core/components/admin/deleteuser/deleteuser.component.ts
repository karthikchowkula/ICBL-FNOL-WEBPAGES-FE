import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.scss']
})
export class DeleteuserComponent implements OnInit {
  deleteuserForm:FormGroup=this.fb.group({
    
    email:new FormControl('',([Validators.required,Validators.email])),
    
   })
 
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
console.log("delete user component")
  }


}
