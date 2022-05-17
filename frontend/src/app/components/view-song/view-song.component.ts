import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Song } from 'src/app/model/song';
import { AuthService } from 'src/app/services/auth.service';
import { MusicService } from 'src/app/services/music.service';
import { ViewSongDialogData } from '../song/song.component';

@Component({
  selector: 'app-view-song',
  templateUrl: './view-song.component.html',
  styleUrls: ['./view-song.component.css']
})
export class ViewSongComponent implements OnInit {

  song: Song = {
    name: '',
    year: 0,
    genre: '',
    user: '',
    authors: [],
    singers: [],
    audio: null,
    video: null,
    albumCover: null,
    rate: 0
  };

  constructor(
    public musicService: MusicService,
    private authService: AuthService,
    public dialogRef: MatDialogRef<ViewSongComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ViewSongDialogData) {

    musicService.getSong(data.song.name).subscribe(
      (res) => {
        this.song = res
        console.log(this.song.user)
      }
    )


  }

  formatLabel(value: number) {
    return value;
  }

  guestLogged() {
    const role = this.authService.getRoleCookie()
    return (role === 'guest')
  }

  ngOnInit(): void {
  }

  rate() {

  }

  isRated() : boolean {
    return !isNaN(this.song.rate)
  }

}
