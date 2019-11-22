import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css']
})
export class ExitComponent implements OnInit {

  isItTime : boolean = true;

  constructor() { }

  ngOnInit() {
    setTimeout( () => {
      this.isItTime=false;
    }, 5000); 

  }
  

  restart() {
    
  }
}
