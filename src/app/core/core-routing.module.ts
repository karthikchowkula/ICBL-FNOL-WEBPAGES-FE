import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HeaderFooterComponent } from '../features/header-footer/header-footer.component';

import { AdminComponent } from './components/admin/admin.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { EdituserComponent } from './components/admin/edituser/edituser.component';
import { DeleteuserComponent } from './components/admin/deleteuser/deleteuser.component';
import { ChangepasswordComponent } from './components/admin/changepassword/changepassword.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { OtpComponent } from './components/otp/otp.component';
import { HomePageComponent } from '../features/home-page/home-page.component';
import { TaskComponent } from '../features/task/task.component';
import { UtilityComponent } from '../features/utility/utility.component';
import { ReportsComponent } from '../features/reports/reports.component';
import { CurrentStatusComponent } from '../features/current-status/current-status.component';
const routes: Routes = [
{path:'login',component:LoginComponent},
{
path:'',component:LoginComponent
} ,
{path:'resetpass',component:ResetPasswordComponent},
{path:'header_footer',component:HeaderFooterComponent},
{path:'admin',component:AdminComponent},
{path:'add_user',component:AdduserComponent},
{path:'delete_user',component:DeleteuserComponent},
{path:'edit_user',component:EdituserComponent},
{path:'change_user',component:ChangepasswordComponent},
{path:'forgot_password',component:ForgotPasswordComponent},
{path:'new_password',component:NewPasswordComponent}, 
{path:'otp',component:OtpComponent}, 
{path:'home_page',component:HomePageComponent}, 
{path:'task_page',component:TaskComponent},
{path:'utility_page',component:UtilityComponent},
{path:'reports_page',component:ReportsComponent},
{path:'current_status',component:CurrentStatusComponent},
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class CoreRoutingModule {}