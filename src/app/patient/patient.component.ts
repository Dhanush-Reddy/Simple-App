import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { patientModel } from './patient.model';
import { ApiService } from '../shared/api.service';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// import { constructor } from 'typescript';
// import { DeleteComponent } from '../delete/delete.component';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  providers:[ApiService]
})


export class PatientComponent implements OnInit{
  formValue !: FormGroup;
  patientModelobj !: patientModel;
  patientData !: patientModel[];
  showAdd !:boolean;
  currentPatID!: number;
  
  firstName ='';
  lastName = '';
  id = 0;
  
  showDeletePopUP:boolean = false;
  
  showUpdate !:boolean;

  
 
  
  constructor(private formbuilder: FormBuilder,
    private api:ApiService,
    private act:ActivatedRoute,
    private route:Router,
    private location:Location,
    
    ) {
  }
  

  gotoUpdate(id: number):void{
    //this.route.navigate([`${pageName}`])
    this.route.navigate(['update', id]);
  }
  
  goback(){
    this.location.back();
  }
  

  gotoDelete(id:any):void{
    
    this.showDeletePopUP = true
  }
  ngOnInit(){

    
    


    this.formValue = this.formbuilder.group({
      firstName :[''],
      lastName :[''],
      age:[''],
      gender:[''],
      dob:[''],
      phone:['']

    })
    this.getAll();

   
    
  }

  trasfer(firstName:any,lastName:any,id:any){
    this.firstName = firstName,
    this.lastName = lastName,
    this.id = id
  }
  addBtn(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }


  postPatient(){
   
    this.patientModelobj = {
      patientId : this.currentPatID,
      firstName : this.formValue.value.firstName,
      lastName: this.formValue.value.lastName,
      age: this.formValue.value.age,
      gender: this.formValue.value.gender,
      dob: this.formValue.value.dob,
      phone: this.formValue.value.phone
    };

    this.api.postPatient(this.patientModelobj).subscribe(res=>{
      console.log(res);
      alert("Patient added successfully")
      this.formValue.reset();
      this.getAll();
      let ref = document.getElementById('cancle');
      ref?.click();
    },
    err => {
      alert("Something went wrong")
    })
  }
  getAll(){
    this.api.getPatient().subscribe(res=>{
      this.patientData = res;
    })
  }
  delete(id:number){
    this.api.deletePatient(id).subscribe(res=>{
      alert("Deleted")
      this.getAll();
    })
  }
  update(n:any){
    
    
    this.currentPatID = n.patientId;    
    this.showUpdate = true;
    this.showAdd = false;
    //this.patientModelobj.patientId = n.patientId;
    this.formValue.controls['firstName'].setValue(n.firstName);
    this.formValue.controls['lastName'].setValue(n.lastName);
    this.formValue.controls['age'].setValue(n.age);
    this.formValue.controls['gender'].setValue(n.gender);
    this.formValue.controls['dob'].setValue(n.dob);
    this.formValue.controls['phone'].setValue(n.phone);
    


  }
 
  updateBtn(){
    this.patientModelobj = {
      patientId : this.currentPatID,
      firstName : this.formValue.value.firstName,
      lastName: this.formValue.value.lastName,
      age: this.formValue.value.age,
      gender: this.formValue.value.gender,
      dob: this.formValue.value.dob,
      phone: this.formValue.value.phone
    };

    console.log(this.patientModelobj);
    this.api.updatePatient(this.patientModelobj,this.patientModelobj.patientId).subscribe(res=>{
      alert("updated");
      let ref = document.getElementById('cancle');
      ref?.click();
      this.getAll();
    })
  }


 

  



}
