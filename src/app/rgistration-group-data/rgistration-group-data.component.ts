import { HttpClient } from '@angular/common/http';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterDataService } from '../register-data.service';

@Component({
  selector: 'app-rgistration-group-data',
  templateUrl: './rgistration-group-data.component.html',
  styleUrls: ['./rgistration-group-data.component.scss']
})


export class RgistrationGroupDataComponent implements OnInit {
  dataSet:any;
  url ="https://localhost:5001/api/v1/group";
  constructor(private regData:RegisterDataService,private http : HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  result:any;
  getData():any{
  this.http.get(this.url).subscribe((result)=>{
      console.warn(result);
      this.dataSet =  result;
    })
  }

  onClick(id:any,group:any,name:any){
    console.log(id," ",group," ",name);
    this.router.navigate(['registration-group/edit'],{state:{id:id,group:group,name:name}})
  }

}
