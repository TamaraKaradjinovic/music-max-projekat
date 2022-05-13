import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Song } from 'src/app/model/song';
import { ViewSongDialogData } from '../song/song.component';

@Component({
  selector: 'app-view-song',
  templateUrl: './view-song.component.html',
  styleUrls: ['./view-song.component.css']
})
export class ViewSongComponent implements OnInit {

  song!: Song;

  constructor(
    public dialogRef: MatDialogRef<ViewSongComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ViewSongDialogData) { 
      this.song = data.song
      console.log(this.song.user)
    }

  ngOnInit(): void {
  }

}
