import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Song } from 'src/app/model/song';
import { ViewSongComponent } from '../view-song/view-song.component';

export interface ViewSongDialogData {
  song: Song
}

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {

  @Input() song!: Song
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ViewSongComponent, {
      data: { song : this.song },
      autoFocus: false,
      maxHeight: '90vh',
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
