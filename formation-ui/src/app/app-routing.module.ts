import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./shared/guard/auth-guard.service";
import {LoginGuardService} from "./shared/guard/login-guard.service";
import {AdminComponent} from "./admin/admin.component";
import {LayoutsComponent} from "./layouts/layouts.component";
import {ParametreComponent} from "./parametre/parametre.component";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [
  {path: '', redirectTo: 'admin', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, canActivate: [LoginGuardService]},

  { path: 'admin', component: LayoutsComponent, canActivate: [AuthGuard], children: [
      { path: '', component: AdminComponent},
      {path: 'parametre', component: ParametreComponent},
      {path: 'users', component: UsersComponent},
    ]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
