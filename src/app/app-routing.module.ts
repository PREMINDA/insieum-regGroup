import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationGroupPageComponent } from './registration-group-page/registration-group-page.component';
import {RegistrationFormComponent} from "./registration-form/registration-form.component";
import { RgistrationGroupDataComponent } from './rgistration-group-data/rgistration-group-data.component';
import { RegistrationGroupEditComponent } from './registration-group-edit/registration-group-edit.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {
    path:'registration-group',loadChildren:()=>import('./registration/registration.module').then(m=>m.RegistrationModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
