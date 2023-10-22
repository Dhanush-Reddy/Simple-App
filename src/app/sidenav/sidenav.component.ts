import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Input() sideNavStatus:boolean=false;
  

  constructor(private route:Router){}
  goToPage(pageName:string):void{
    this.route.navigate([`$(pageName)`])
  }

  list =[
    {
      number:'1',
      name:'Home',
      icon:'fa-solid fa-house'
    },
    {
      number:'2',
      name:'Doctor',
      icon:'fa-solid fa-user-doctor'
    },
    

  ]
}
