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

  ngOnInit(): void {
  }

  addSong() { }

  imageFileChange(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.model.albumCover = e.target.result
    };
    reader.readAsDataURL(event.target.files[0]);
    console.log(this.model);
    this.model.albumCover = this.model.albumCover!.slice(22)
    console.log(this.model);
  }
  
  audioFileChange(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.model.audio = e.target.result
    };
    reader.readAsDataURL(event.target.files[0]);

    console.log(this.model);
    this.model.albumCover = this.model.albumCover!.slice(22)
    console.log(this.model);
  }

  videoFileChange(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.model.video = e.target.result
    };
    reader.readAsDataURL(event.target.files[0]);

    console.log(this.model);
    this.model.albumCover = this.model.albumCover!.slice(22)
    console.log(this.model);
  }

}


