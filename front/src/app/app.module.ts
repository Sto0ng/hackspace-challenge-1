import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserDescriptionComponent } from './user-list/user-description/user-description.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path: 'detail', component: UserDescriptionComponent},
  {path: 'list', component: UserListComponent;}
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
