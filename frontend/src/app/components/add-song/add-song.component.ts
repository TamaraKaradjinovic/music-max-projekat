import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Song } from 'src/app/model/song';
import { DialogData } from '../music/music.component';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {

  genres: string[] = []

  model: Song = {
    name: '',
    year: 0,
    genre: '',
    user: '',
    authors: [],
    singers: [],
    audio: null,
    video: null,
    albumCover: null
  }
  constructor(
    public dialogRef: MatDialogRef<AddSongComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.genres = data.genres
  }

  ngOnInit(): void {
  }

  addSong() { }


}