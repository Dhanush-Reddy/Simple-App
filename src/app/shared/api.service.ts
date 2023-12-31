import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, } from '@angular/common/http'
import { env } from 'src/Envorinment/env';
import { map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { patientModel } from '../patient/patient.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseApiUrl:string = env.baseUrl;
  constructor(private http: HttpClient) { }

  patientID !: any;

  // patientRegister(addPatient:Patient):Observable<Patient>
  // {
  //   return this.http.post<Patient>(this.baseApiUrl+'/Patient/Register_Patient',addPatient);
  // }

  allData : any[]= [];
  



  postPatient(data:any){
    return this.http.post<any>(this.baseApiUrl+'AddPatient',data).pipe(map((res:any)=>{
      return res;
    }))
  }

  getPatient(){
    return this.http.get(this.baseApiUrl+'GetAll').pipe(map((res:any)=>{
      return res;
    }))
  }
  updatePatient(data:any,id:number)
  {
    
    return this.http.put(this.baseApiUrl+'UpdatePateint/' + id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  deletePatient(id:number){
   
    return this.http.delete(this.baseApiUrl+'DeletePatient/'+id).pipe(map((res:any)=>{
      return res;
    }))
  }
  getById(id:any){
    return this.http.get(this.baseApiUrl+'GetById/'+id).pipe(map((res:any)=>{
      return res;
    }))
  }

}
