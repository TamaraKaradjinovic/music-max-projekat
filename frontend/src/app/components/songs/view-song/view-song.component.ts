import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Song } from 'src/app/model/song';
import { AuthService } from 'src/app/services/auth.service';
import { MusicService } from 'src/app/services/music.service';
import { ViewSongDialogData } from '../song-card/song-card.component';

@Component({
  selector: 'app-view-song',
  templateUrl: './view-song.component.html',
  styleUrls: ['./view-song.component.css']
})
export class ViewSongComponent implements OnInit {

  loading = true;

  myRate : number | null = null

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
    @Inject(MAT_DIALOG_DATA) public data: ViewSongDialogData,
    private _snackBar: MatSnackBar    
    ) {

    musicService.getSong(data.song.name).subscribe(
      (res) => {
        this.song = res
        this.loading = false
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
    this.musicService.postRate({songName: this.song.name, rate: this.myRate!}).subscribe(
      (res) => {
        this.dialogRef.close()
        this._snackBar.open("Successful", 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['snackbar'],
        });
      }
    )
  }
  
  setRate(value: number) {
    this.myRate = value
  }

  isRated() : boolean {
    return !isNaN(this.song.rate)
  }

}
