import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CreateTeamComponent } from './components/create-team/create-team.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { UpdateTeamComponent } from './components/update-team/update-team.component';
import { UpdateAccountComponent } from './components/update-account/update-account.component';
import { LoginComponent } from './components/login/login.component';
import { AllTeamsComponent } from './components/all-teams/all-teams.component';
import { DetailsAboutTeamComponent } from './components/details-about-team/details-about-team.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { GuardNbaGuard } from './guard/guard-nba.guard';
import { MyTeamsComponent } from './components/my-teams/my-teams.component';
import { AllTeamsAdministrationComponent } from './components/all-teams-administration/all-teams-administration.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path:'index',component:IndexComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'create-team',component:CreateTeamComponent},
  {path:'create-account',component:CreateAccountComponent},
  {path:'edit-team',component:UpdateTeamComponent},
  {path:'edit-user',component:UpdateAccountComponent},
  {path:'login',component:LoginComponent},
  {path:'all-teams',component:AllTeamsComponent},
  {path:'details',component:DetailsAboutTeamComponent},
  {path:'all-users',component:AllUsersComponent},
  {path:'my-teams',component:MyTeamsComponent},
  {path:'all-teams-administration',component:AllTeamsAdministrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
