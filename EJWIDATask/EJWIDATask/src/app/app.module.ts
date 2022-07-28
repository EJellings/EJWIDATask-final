import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './user/user.component';
import { SelecteduserComponent } from './user/selecteduser/selecteduser.component';

import { SelectedUserTodosComponent } from './user/selecteduser/selected-user-todos/selected-user-todos.component';
import { FormsModule } from '@angular/forms';
import { SelectedUserEditComponent } from './user/selecteduser/selected-user-edit/selected-user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PagenotfoundComponent,
    UserComponent,
    SelecteduserComponent,
    SelectedUserTodosComponent,
    SelectedUserEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
