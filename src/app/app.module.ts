import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationGroupPageComponent } from './registration-group-page/registration-group-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RgistrationGroupDataComponent } from './rgistration-group-data/rgistration-group-data.component';
import { RegistrationGroupEditComponent } from './registration-group-edit/registration-group-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegistrationGroupPageComponent,
    RegistrationFormComponent,
    RgistrationGroupDataComponent,
    RgistrationGroupDataComponent,
    RegistrationGroupEditComponent,
    RegistrationGroupEditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
