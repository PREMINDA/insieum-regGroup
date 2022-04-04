import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterDataService } from '../register-data.service';

@Component({
  selector: 'app-registration-group-edit',
  templateUrl: './registration-group-edit.component.html',
  styleUrls: ['./registration-group-edit.component.scss']
})
export class RegistrationGroupEditComponent implements OnInit {

  form!: FormGroup;
  constructor(private fb: FormBuilder,private router: Router,private regData:RegisterDataService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      id:[`${history.state.id}`],
      registrationGroupNumber:[`${history.state.group}`,[Validators.required]],
      registrationGroupName:[`${history.state.name}`,[Validators.required]]
    });

    console.log(this.form)
  }

  get idNumber(){
    return this.form.get('id')
  }

 async onSubmit(){

    if(this.form.status==='VALID'){

      try{
        this.regData.editData(this.form.value,this.idNumber?.value);
       // this.router.navigate(['registration-group/data'])
      }
      catch(e){
        console.log(e);
      }

    }else{
      console.log("Fill Form First");
    }
  }
}
