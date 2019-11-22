import { Component, OnInit } from '@angular/core';
import { BEDIMAGES } from './bedroom-mock'
import { BedroomImages } from './bedroomImg';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']

})
export class BedroomComponent implements OnInit {

images = BEDIMAGES;

  constructor(private router: Router) { }

  correctAnswer: BedroomImages [] = [];
  wrongAnswer : BedroomImages[] = [];
  exitScreen = false;
  blood: boolean = false;

  ngOnInit() { }

  addAnswer(image: BedroomImages){
    if(image.id === 'cross' || image.id === 'holyWater' || image.id === 'bible' ){
      this.correctAnswer.push(image)
      this.displayExit()
      this.loose(image)
      console.log(this.correctAnswer)
      
    }
  }

  displayExit(){
    if (this.correctAnswer.length === 3){
      this.exitScreen = true;
    }
  }

  loose (image: BedroomImages){
    if(image.id === 'maryPainting' || image.id === 'paintingLeft'){
      this.wrongAnswer.push(image);
      this.playSound()
    }
  }

  playSound(){
    if (this.correctAnswer.length === 1){
      this.blood=true; 
    }
  }

  replay(){
    this.router.navigate(["/"]);
  }

}


