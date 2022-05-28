import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { Song } from 'src/app/model/song';
import { AuthService } from 'src/app/services/auth.service';
import { MusicService } from 'src/app/services/music.service';
import { AddSongComponent } from '../add-song/add-song.component';

export interface DialogData {
  genres: string[];
}

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  genres!: string[]

  singers!: string[]

  allSongs!: Song[]
  songs!: Song[]

  yearS: number = 0
  yearE: number = 2022

  singer: string | undefined = undefined

  hasAudio: boolean = false
  hasVideo: boolean = false

  constructor(
    private service: MusicService,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog) { }


  ngOnInit(): void {

    this.service.getAllGenres().subscribe(

      (res) => {
        this.genres = res

        const currGenre = this.router.url.split("/")[2]
        const curr = + currGenre

        this.service.getSongs().subscribe(
          (res) => {
            this.allSongs = res
            if (this.router.url.split("/").length != 2) {
              this.songs = this.allSongs.filter(
                x => x.genre === currGenre
              )
            } else {
              this.songs = this.allSongs
            }
          }
        );

      }
    );
  }


  emptySongs(): boolean {
    if (this.allSongs == undefined || this.songs == undefined)
      return false
    return !Object.keys(this.songs).length
  }

  filter() {
    this.songs = this.songs.filter(
      x => {
        return (
          x.year >= this.yearS && x.year <= this.yearE
          && ((typeof this.singer === "undefined") || x.singers.indexOf(this.singer!) != -1)
          && (this.hasAudio != (typeof x.audio === "undefined"))
          && (this.hasVideo != (typeof x.video === "undefined"))
        )
      }
    )
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddSongComponent, {
      data: { genres: this.genres },
      height: '50% auto',
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  guestLogged() {
    const role = this.authService.getRoleCookie()
    return (role === 'guest')
  }

}
