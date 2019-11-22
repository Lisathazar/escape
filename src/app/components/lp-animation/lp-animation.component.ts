import { Component, OnInit, ɵPlayState } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lp-animation',
  templateUrl: './lp-animation.component.html',
  styleUrls: ['./lp-animation.component.css'],
  animations: [
    trigger('changeTitleSize', [
      state('initial', style({
        width: '0px',
        height: '0px'
      })),
      state('final', style({
        width: '800px',
        height: '800px'
      })),
      transition('initial=>final', animate('300ms')),
      transition('final=>initial', animate('300ms'))
    ]),
  ]
})
export class LpAnimationComponent implements OnInit {

  currentState ='initial';

  hideButton:boolean = true;
  audio = new Audio ('assets/sounds/Female_Scream_Horror-NeoPhyTe-138499973.mp3');
  song = new Audio ('assets/sounds/song.mp3');
  voice = new Audio ('assets/sounds/voice.mp3')

  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeTitleSize() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    
  }

  hideButtonClicked(){
    this.hideButton = false;
    this.audio.play();
    setTimeout( () => {
      this.router.navigate(['/bathroomPage']);
      this.song.play();
      this.voice.play();
    }, 6000); 
    
  }

  
}

