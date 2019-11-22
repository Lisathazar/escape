import { Directive,HostListener, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appFront]'
})
export class FrontDirective implements OnInit{

  @HostBinding('style.zIndex') myZindex : number;
  @HostBinding('style.borderColor') myColor : string;

  
  constructor() { }
  ngOnInit(){}

  @HostListener('mouseenter') mouseEnterEvent (eventData : Event){
    this.myZindex = 2;
    this.myColor = '#1e223d';
  }
  @HostListener('mouseleave') mouseLeaveEvent (eventData : Event){
    this.myZindex = 1;
    this.myColor = 'transparent';
  }



  
}
