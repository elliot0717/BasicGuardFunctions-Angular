import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService as  AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RoleGuardService as RoleGuard} from './role-guard.service';


const routes: Routes = [
  { path: '', component : HomeComponent},
  { path: 'profile', component : ProfileComponent, canActivate: [AuthGuard]},
  { path: 'admin', component : AdminComponent , canActivate: [RoleGuard], data: {expectedRole : 'admin'} },
  { path: '**' , redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
