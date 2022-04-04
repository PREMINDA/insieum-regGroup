import { NgModule } from '@angular/core';

import { RegistrationRoutingModule } from './registration-routing.module';
import { FromComponent } from '../from/from.component';
import { ListItemComponent } from '../list-item/list-item.component';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import { RegistrationGroupEditComponent } from '../registration-group-edit/registration-group-edit.component';
import { RegistrationGroupPageComponent } from '../registration-group-page/registration-group-page.component';
import { RgistrationGroupDataComponent } from '../rgistration-group-data/rgistration-group-data.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RegistrationGroupPageComponent,
    RegistrationFormComponent,
    RgistrationGroupDataComponent,
    RegistrationGroupEditComponent,
    ListItemComponent,
    FromComponent,
  ],
  imports: [
    RegistrationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ]
})
export class RegistrationModule { }
