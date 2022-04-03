import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {
  url ="https://localhost:5001/api/v1/group";
  constructor(private http : HttpClient) { }
  saveData(data:any){
    console.log(data);
    this.http.post(this.url,data).subscribe((result)=>{
      console.warn(result);
    })
  }
  editData(data:any,id:string){
    console.log(data);
    this.http.put(this.url+`/${id}`,data).subscribe((result)=>{
      console.warn(result);
    })
  }
}
