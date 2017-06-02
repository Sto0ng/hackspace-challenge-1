import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserListComponent } from "./user-list/user-list.component";
import { UserDescriptionComponent } from "./user-list/user-description/user-description.component";
import { UserService } from "app/user.service";
import { ParticipantService } from "app/participant.service";

const appRoutes: Routes = [
  { path: 'user/:id', component: UserDescriptionComponent },
  { path: 'user-list', component: UserListComponent },
  { path: '', redirectTo: '/user-list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    UserDescriptionComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ UserService, ParticipantService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
