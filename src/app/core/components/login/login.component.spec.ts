import { MaterialModule } from './../../../shared/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationServiceService } from './../../services/authentication-service.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let debugElement;
  let nativeElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[BrowserAnimationsModule ,MaterialModule,FormsModule,ReactiveFormsModule,RouterModule,HttpClientModule,RouterTestingModule],
      providers:[AuthenticationServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
    nativeElement = debugElement.nativeElement;
    component.ngOnInit()
  });
//test case 1 :checked whether formgroup elements length is equal to rendered input elements 
  it('Count Number of FormGroup Input Elements', () => {
    const formelements=fixture.debugElement.nativeElement.querySelector('#form')
    const renderedeelements=formelements.querySelectorAll('input')
    expect(renderedeelements.length).toEqual(2);
  });
  //test case 2:checked whether default values are empty or not
  it('check default value of formgroup elements',()=>{
     const loginform=component.loginForm;
    const defaultvalues={
      email:'',
      password:''
    }
    expect(defaultvalues).toEqual(loginform.value)
  });
 
  describe('email',()=>{
     //test case 3:check whether email is accepting
    it('check whether email is accepting only text',()=>{
      component.loginForm.get('email')?.setValue('kvch')
      expect(component.loginForm.get('email')?.hasError('email')).toBeTrue()
  })
  //test case 4:when email is empty and it is required,so email is not valid
  it('check when email is empty it is valid or not',()=>{
    let email=component.loginForm.get('email')
    email?.setValue('')
    expect(email?.valid).toBe(false)
  })
   //test case 5:email pattern is matched or not

it('email pattern is matched or not',()=>{
 component.loginForm.get('email')?.setValue('karthik@gmail.com')
 expect(component.loginForm.get('email')?.hasError('email')).toBe(false)
})
  });
  describe('password',()=>{

    it('check when password is empty it is valid or not',()=>{
      let password=component.loginForm.get('password')
      password?.setValue('')
      expect(password?.valid).toBe(false)
    })
   
   
    it('check when password is empty it is valid or not',()=>{
      let password=component.loginForm.get('password')
      password?.setValue('')
      expect(password?.hasError('required')).toBe(true)
    })
    it('check password length it should be min 12',()=>{
      let password=component.loginForm.get('password')
      password?.setValue('kkkkkkkkk')
      expect(password?.hasError('minlength')).toBeTruthy()
    })
  })
});
