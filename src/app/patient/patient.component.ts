import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { patientModel } from './patient.model';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit{
  formValue !: FormGroup;
  patientModelobj : patientModel = new patientModel();
  patientData !: any;
  showAdd !:boolean;
  showUpdate !:boolean;
  constructor(private formbuilder: FormBuilder,
    private api:ApiService) {
  }

  ngOnInit(): void {
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
  addBtn(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }


  postPatient(){
    this.patientModelobj.firstName = this.formValue.value.firstName;
    this.patientModelobj.lastName = this.formValue.value.lastName;
    this.patientModelobj.age = this.formValue.value.age;
    this.patientModelobj.gender = this.formValue.value.gender;
    this.patientModelobj.dob = this.formValue.value.dob;
    this.patientModelobj.phone = this.formValue.value.phone;

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
  delete(n:any){
    this.api.deletePatient(n.id).subscribe(res=>{
      alert("Deleted")
      this.getAll();
    })
  }
  update(n:any){
    this.showUpdate = true;
    this.showAdd = false;
    this.patientModelobj.id = n.id;
    this.formValue.controls['firstName'].setValue(n.firstName);
    this.formValue.controls['lastName'].setValue(n.lastName);
    this.formValue.controls['age'].setValue(n.age);
    this.formValue.controls['gender'].setValue(n.gender);
    this.formValue.controls['dob'].setValue(n.dob);
    this.formValue.controls['phone'].setValue(n.phone);
  }
  updateBtn(){
    this.patientModelobj.firstName = this.formValue.value.firstName;
    this.patientModelobj.lastName = this.formValue.value.lastName;
    this.patientModelobj.age = this.formValue.value.age;
    this.patientModelobj.gender = this.formValue.value.gender;
    this.patientModelobj.dob = this.formValue.value.dob;
    this.patientModelobj.phone = this.formValue.value.phone;
    this.api.updatePatient(this.patientModelobj,this.patientModelobj.id).subscribe(res=>{
      alert("updated");
      let ref = document.getElementById('cancle');
      ref?.click();
      this.getAll();
    })
  }



}
