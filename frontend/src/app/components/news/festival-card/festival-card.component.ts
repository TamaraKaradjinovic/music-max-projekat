import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Festival } from 'src/app/model/festival';
import { ViewFestivalComponent } from '../view-festival/view-festival.component';

@Component({
  selector: 'app-festival-card',
  templateUrl: './festival-card.component.html',
  styleUrls: ['./festival-card.component.css']
})
export class FestivalCardComponent implements OnInit {

  @Input() festival!: Festival
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(ViewFestivalComponent, {
      data: { festival : this.festival },
      autoFocus: false,
      maxHeight: '90vh',
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
