import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterDataService } from '../register-data.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder,private regData:RegisterDataService,private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      registrationGroupNumber:['',[Validators.required]],
      registrationGroupName:['',[Validators.required]]
    });
  }

  async onSubmit(){

    if(this.form.status==='VALID'){

      try{
       await this.regData.saveData(this.form.value);
       this.router.navigate(['registration-group/data'])
      }
      catch(e){
        console.log(e);
      }

    }else{
      console.log("Fill Form First");
    }
  }
}
