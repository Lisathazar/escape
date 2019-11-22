import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-rebus',
  templateUrl: './rebus.component.html',
  styleUrls: ['./rebus.component.css']
})
export class RebusComponent implements OnInit {

  answer: string; 
  answerSubmited : string;
  goodAnswer: string = "Paranormal Activity"
  blood: boolean = false;
  


  constructor(private router: Router) { }

  ngOnInit() {
   
  }

  submitAnswerRebus(){
    this.answerSubmited = this.answer;
    if (this.answerSubmited != this.goodAnswer) {
      this.blood=true; 
    }
  }
  replay(){
    this.router.navigate(["/"]);
  }

}
