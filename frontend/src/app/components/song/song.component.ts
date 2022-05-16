import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Song } from 'src/app/model/song';
import { ViewSongComponent } from '../view-song/view-song.component';

export interface ViewSongDialogData {
  song: Song
}

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  @Input() song!: Song
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ViewSongComponent, {
      data: { song : this.song },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
