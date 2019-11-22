import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { LivingroomComponent } from 'src/app/components/livingroom/livingroom.component';



@Component({
  selector: 'app-livingroomplace',
  templateUrl: './livingroomplace.component.html',
  styleUrls: ['./livingroomplace.component.css']
})
export class LivingroomplaceComponent implements OnInit {
  
  constructor(private dialog : MatDialog) { }

  ngOnInit() {
    
  }
  openDvd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    
   
  this.dialog.open(LivingroomComponent)
  }
}
