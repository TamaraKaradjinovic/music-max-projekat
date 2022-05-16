import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Song } from 'src/app/model/song';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  genres!: string[]

  singers!: string[]

  allsongs!: Song[]
  songs!: Song[]

  yearS: number = 0
  yearE: number = 2022

  singer: string | undefined = undefined

  hasAudio: boolean = false
  hasVideo: boolean = false

  constructor(
    private service: MusicService,
    private router: Router,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => console.log("params: "+params));
  }


  ngOnInit(): void {

    console.log('init')
 
    this.service.getAllSingers().subscribe(
      (res) => {
        this.singers = res
      }
    )

    console.log(this.router.url.split("/")[2])

    this.service.getAllGenres().subscribe(
      (res) => {
        this.genres = res

        const currGenre = this.router.url.split("/")[2]
        const curr = + currGenre

        this.service.getSongs().subscribe(
          (res) => {
            this.allsongs = res
            if (this.router.url.split("/").length != 2) {
              this.songs = this.allsongs.filter(
                x => x.genre === currGenre
              )
            } else {
              this.songs = this.allsongs
            }
          }
        );

      }
    );
  }


  filter() {
    console.log('filteeeeeeeeeer')
    console.log(this.songs)
    this.songs = this.songs.filter(
      x => {
        console.log(this.singer
        )

        return (
          x.year >= this.yearS && x.year <= this.yearE
          && ((typeof this.singer === "undefined") || x.singers.indexOf(this.singer!) != -1)
          && (this.hasAudio != (typeof x.audio === "undefined"))
          && (this.hasVideo != (typeof x.video === "undefined"))
        )
      }
    )
  }





  // proba

  slides = [

    { image: 'https://en.wikipedia.org/wiki/Lisbon#/media/File:Lisbon_(36831596786)_(cropped).jpg' },

    { image: 'https://deadline.com/wp-content/uploads/2022/03/Angelina-Jolie-photo-Netflix-Alexei-Hay-e1646407877581.jpeg?w=681&h=383&crop=1' },

    { image: 'https://gsr.dev/material2-carousel/assets/demo.png' },

  ];

}
