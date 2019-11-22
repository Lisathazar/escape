import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HallComponent } from './hall/hall.component';
import { RiddleComponent } from './riddle/riddle.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BathroomPageComponent } from './pages/bathroom-page/bathroom-page.component';
import { LivingroomComponent } from './components/livingroom/livingroom.component';
import { FrontDirective } from './shared/front.directive';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LpAnimationComponent } from './components/lp-animation/lp-animation.component';
import { MatDialogModule } from '@angular/material';
import { KitchenComponent } from './kitchen/kitchen.component';
import { RebusComponent } from './rebus/rebus.component';
import { LivingroomplaceComponent } from './pages/livingroomplace/livingroomplace.component';
import { BedroomComponent } from './pages/bedroom/bedroom.component';
import { ExitComponent } from './pages/exit/exit.component';


@NgModule({
  declarations: [
    AppComponent,
    HallComponent,
    RiddleComponent,
    BathroomPageComponent,
    LandingPageComponent,
    LpAnimationComponent,
    LivingroomComponent,
    FrontDirective,
    LivingroomplaceComponent,
    BedroomComponent,
    ExitComponent,
    KitchenComponent,
    RebusComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [LivingroomComponent, RebusComponent, RiddleComponent]
})
export class AppModule { }
