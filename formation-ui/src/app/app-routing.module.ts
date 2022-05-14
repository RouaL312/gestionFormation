import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./shared/guard/auth-guard.service";
import {LoginGuardService} from "./shared/guard/login-guard.service";
import {AdminComponent} from "./admin/admin.component";
import {LayoutsComponent} from "./layouts/layouts.component";
import {ParametreComponent} from "./parametre/parametre.component";
import {UsersComponent} from "./users/users.component";
import {OrganismeComponent} from "./organisme/organisme.component";
import {FormateursComponent} from "./formateurs/formateurs.component";
import {SessionFormationsComponent} from "./session-formations/session-formations.component";
import {PaysComponent} from "./pays/pays.component";
import {DomainesComponent} from "./domaines/domaines.component";
import {FormationsComponent} from "./formations/formations.component";
import {ParticipantsComponent} from "./participants/participants.component";

const routes: Routes = [
  {path: '', redirectTo: 'admin', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, canActivate: [LoginGuardService]},

  { path: 'admin', component: LayoutsComponent, canActivate: [AuthGuard], children: [
      { path: '', component: AdminComponent},
      {path: 'parametre', component: ParametreComponent},
      {path: 'users', component: UsersComponent},
      {path: 'organisme', component: OrganismeComponent},
      {path: 'formateurs', component: FormateursComponent},
      {path: 'sessions', component: SessionFormationsComponent},
      {path: 'formations', component: FormationsComponent},
      {path : 'pays',component:PaysComponent},
      {path: 'domaines',component: DomainesComponent},
      {path: 'participants',component: ParticipantsComponent}
    ]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
