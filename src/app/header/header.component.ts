import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  @Output() sideNavToogle = new EventEmitter<boolean>();
  menustatus :boolean = false;

  constructor(private route:Router){}
  goToPage(pageName:string):void{
    this.route.navigate([`$(pageName)`])
  }
  ngOnInit():void{

  }
  SideNavToogle(){
    this.menustatus = !this.menustatus;
    this.sideNavToogle.emit(this.menustatus);
  }
  

}
