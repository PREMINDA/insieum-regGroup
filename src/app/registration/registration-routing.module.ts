import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import { RegistrationGroupEditComponent } from '../registration-group-edit/registration-group-edit.component';
import { RgistrationGroupDataComponent } from '../rgistration-group-data/rgistration-group-data.component';

const routes: Routes = [
  {
    path:'',
    component:RgistrationGroupDataComponent
  },
  {
    path:'form',
    component:RegistrationFormComponent
  },
  {
    path:'edit',
    component:RegistrationGroupEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
