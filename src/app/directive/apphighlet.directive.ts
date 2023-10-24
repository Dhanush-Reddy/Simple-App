import { Directive, ElementRef, OnInit,Input ,Renderer2} from '@angular/core';

@Directive({
  selector: '[appApphighlet]'
})
export class ApphighletDirective implements OnInit{

  _age!: number
  @Input() set age(age: number[]){
    this._age = age[0]
  };

  

  constructor(private ele:ElementRef) { }
  ngOnInit() {
    if(this._age >= 20){
    //  this.render.setStyle(this.ele.nativeElement,'background-color','red')
      this.ele.nativeElement.style.backgroundColor='red';
    }

    
    
  }

  
  

}

