import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { authGuard, authGuardUser } from './guard/auth.guard';
import { UserComponent } from './component/user/user.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent, canActivate: [authGuard]},
  {path: 'user', component: UserComponent, canActivate: [authGuardUser]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
