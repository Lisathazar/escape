import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../../app.component';
import { LpAnimationComponent } from '../lp-animation/lp-animation.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  
})
export class LandingPageComponent implements OnInit {
  background: string = "src/assets/homepage.png";


  constructor() { }

  ngOnInit() {
  }

  

}
