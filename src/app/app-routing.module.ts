import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LivingroomplaceComponent } from './pages/livingroomplace/livingroomplace.component';
import { ExitComponent } from './pages/exit/exit.component';
import { BedroomComponent } from './pages/bedroom/bedroom.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { BathroomPageComponent } from './pages/bathroom-page/bathroom-page.component';

import { HallComponent } from './hall/hall.component';




const routes: Routes = [
  {path:'', component : LandingPageComponent},
  {path:'bathroomPage', component :BathroomPageComponent},
  {path:'bedroom', component : BedroomComponent},
  {path:'hall',component : HallComponent },
  {path:'kitchen', component : KitchenComponent},
  {path:'living', component : LivingroomplaceComponent},
  {path:'exit', component : ExitComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export { routes };
