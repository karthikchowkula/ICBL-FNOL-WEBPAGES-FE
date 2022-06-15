import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
    {path:'login',component:LoginComponent},
  {
      path:'',component:LoginComponent
  } ,
  {path:'resetpass',component:ResetPasswordComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
