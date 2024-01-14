import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'; 
import {MatIconModule} from '@angular/material/icon';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './components/contact/contact.component'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LightboxModule } from 'ngx-lightbox';
import { HttpClientModule } from '@angular/common/http';
import { CreateTeamComponent } from './components/create-team/create-team.component';
import {MatSelectModule} from '@angular/material/select';
import { NbaServiceService } from 'src/services/nba-service.service';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { ShowAllTeamsComponent } from './components/show-all-teams/show-all-teams.component';
import { UpdateTeamComponent } from './components/update-team/update-team.component';
import { UpdateAccountComponent } from './components/update-account/update-account.component';
import { LoginComponent } from './components/login/login.component'; 
import {MatExpansionModule} from '@angular/material/expansion';
import { AllTeamsComponent } from './components/all-teams/all-teams.component';
import {MatTableModule} from '@angular/material/table';
import { DetailsAboutTeamComponent } from './components/details-about-team/details-about-team.component'; 
import { RouterModule } from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { MyTeamsComponent } from './components/my-teams/my-teams.component';
import { AllTeamsAdministrationComponent } from './components/all-teams-administration/all-teams-administration.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    CreateTeamComponent,
    CreateAccountComponent,
    ShowAllTeamsComponent,
    UpdateTeamComponent,
    UpdateAccountComponent,
    LoginComponent,
    AllTeamsComponent,
    DetailsAboutTeamComponent,
    AllUsersComponent,
    MyTeamsComponent,
    AllTeamsAdministrationComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    LightboxModule,
    HttpClientModule,
    MatSelectModule,
    MatExpansionModule,
    MatTableModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
