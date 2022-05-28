import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Genre } from 'src/app/model/genre';
import { Song } from 'src/app/model/song';
import { SongPost } from 'src/app/model/song-post';
import { MusicService } from 'src/app/services/music.service';
import { DialogData } from '../music/music.component';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {

  allGenres!: Genre[];
  genres!: Genre[];
  singers: { id: number, stageName: string }[] = []
  authors: { id: number, stageName: string }[] = []

  model: SongPost = {
    name: '',
    year: 1900,
    genre: -1,
    authors: [],
    singers: [],
    audio: null,
    video: null,
    albumCover: null
  }

  genre!: Genre

  constructor(
    public musicService: MusicService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddSongComponent>,
    private router: Router) { }

  ngOnInit(): void {
    this.genres = []
    this.allGenres = []
    this.musicService.getAllGenresId().subscribe(
      (res) => {
        res.forEach(x => {
          console.log(x)
          this.allGenres.push(x)
        })
        console.log(this.allGenres)
      }
    )

    this.musicService.getAllSingersId().subscribe(
      (res) => {
        res.forEach(x => {
          console.log(x)
          this.singers.push(x)
        })
        console.log(this.singers)
      }
    )

    this.musicService.getAllAuthorsId().subscribe(
      (res) => {
        res.forEach(x => {
          console.log(x)
          this.authors.push(x)
        })
        console.log(this.authors)
      }
    )
  }


  imageFileChange(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.model.albumCover = e.target.result
      this.model.albumCover = this.model.albumCover!.slice(23)
      console.log(this.model);
    };
    reader.readAsDataURL(event.target.files[0]);
    console.log(this.model);
  }

  audioFileChange(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.model.audio = e.target.result
      this.model.audio = this.model.audio!.slice(23)
    };
    reader.readAsDataURL(event.target.files[0]);
    console.log(this.model);
  }

  videoFileChange(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.model.video = e.target.result
      this.model.video = this.model.video!.slice(24)
    };
    reader.readAsDataURL(event.target.files[0]);
    console.log(this.model);
  }

  addSong() {
    console.log(this.model);
    this.musicService.postSong(this.model).subscribe(
      (res) => {
        console.log("dodato!")

        this.dialogRef.close()

        this._snackBar.open("Successful", 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['snackbar'],
        });

        this.router.navigate(['/music'])

      }
    )
  }

  isFilled() {
    console.log(this.model)
    if (this.model.name == ''
      || this.model.year <= 1900
      || this.model.genre == -1
      || this.model.authors.length < 1
      || this.model.singers.length < 1
      || this.model.albumCover == null
    )
      return false;
    return true;
  }

}


