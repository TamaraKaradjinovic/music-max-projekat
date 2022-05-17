import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    year: -1,
    genre: -1,
    authors: [],
    singers: [],
    audio: null,
    video: null,
    albumCover: null
  }

  genre!: Genre

  constructor(public musicService: MusicService) { }

  ngOnInit(): void {
    this.genres = []
    this.allGenres = []
    this.musicService.getAllGenresId().subscribe(
      (res) => {   
        res.forEach(x => { 
          console.log(x)
          this.allGenres.push(x)  })    
        console.log(this.allGenres)
      }
    )

    this.musicService.getAllSingersId().subscribe(
      (res) => {   
        res.forEach(x => { 
          console.log(x)
          this.singers.push(x)  })    
        console.log(this.singers)
      }
    )

    this.musicService.getAllAuthorsId().subscribe(
      (res) => {   
        res.forEach(x => { 
          console.log(x)
          this.authors.push(x)  })    
        console.log(this.authors)
      }
    )
  }


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

  setGenre(genre: Genre) {
    this.model.genre = genre.id
    console.log(" genre set: " +this.model.genre);
  }


  addSong() { 
    console.log(this.genre);
    console.log(this.model);
    
  }

}


