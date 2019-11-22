import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-riddle',
  templateUrl: './riddle.component.html',
  styleUrls: ['./riddle.component.css']
})
export class RiddleComponent implements OnInit {

  res: string; 
  reponseSubmited : string;
  reponse: string = "jumelles"
  blood: boolean = false;
 

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  matchString(){
    this.reponseSubmited = this.res;
    if (this.reponseSubmited != this.reponse) {
      this.blood=true;      
    }
  }
  replay(){
    this.router.navigate(["/"]);
  }

}
