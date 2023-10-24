import { Component, Input } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { patientModel } from '../patient/patient.model';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
// import { PatientComponent } from '../patient/patient.component';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  formValue !: FormGroup
  patientModelobj !: patientModel;
  patientData !: Observable<any>;
  currentPatID!: number
  
  patientId:string|any='';
  

  constructor(private formbuilder:FormBuilder,private api:ApiService,private location:Location, private activatedRoute : ActivatedRoute) {  }
  
  ngOnInit(): void {


    this.activatedRoute.params.subscribe(data => {
      this.currentPatID = data['id']      
    })

    
    this.patientData = this.api.getById(this.currentPatID);
    this.formValue = this.formbuilder.group({
      firstName :[''],
      lastName :[''],
      age:[''],
      gender:[''],
      dob:[''],
      phone:['']
    })
  }

  getbyId(id:any){
    this.api.getById(id).subscribe(res => {
      this.patientData = res
      console.log(res);
    });
  }

  goBack():void{
    this.location.back();
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
      
     
    })
  }
  
  
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

