import { Component, Injectable, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { patientModel } from '../patient/patient.model';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute } from '@angular/router';
import { ImportsNotUsedAsValues } from 'typescript';
import { jsDocComment } from '@angular/compiler';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers:[ApiService]
})
export class DeleteComponent implements OnInit {
  

  @Output() event = new EventEmitter();
  @Input() firstName :any;
  @Input() lastName :any;
  @Input() id:any;

  patientModelobj !: patientModel;
  patientData !: Observable<any>;
  curretnData !: [];
  currentPatID!: number
  patientId:string|any='';
  
  childmethod(){
    this.event.emit();
    
  }


  

  constructor(private api:ApiService,private route:ActivatedRoute){}

  ngOnInit():void{
  

   
    
  }
  
  getbyId(id:any){
    this.api.getById(id).subscribe(res => {
      this.patientData = res
      console.log(res);
    });
  }
  

  
  
  
}
