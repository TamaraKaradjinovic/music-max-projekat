import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/model/song';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  songs!: Song[]

  constructor(private service: MusicService) { }
  value: number = 2020;

  genres: string[] = []

  dateS!: Date
  dateE!: Date
  
  ngOnInit(): void {
   
    this.service.getSongs().subscribe(
      (res) => {
        console.log('genres found')
        this.songs = res
        console.log(this.genres)
      }
    );

    this.service.getAllGenres().subscribe(
      (res) => {
        console.log('genres found')
        this.genres = res
        console.log(this.genres)

      }
    );
  }


  setStartingMonthAndYear(event:any, dp:any) {

  }

  setEndingMonthAndYear(event:any, dp:any) {

  }





  // proba

  slides = [

    {image: 'https://en.wikipedia.org/wiki/Lisbon#/media/File:Lisbon_(36831596786)_(cropped).jpg'}, 

    {image: 'https://deadline.com/wp-content/uploads/2022/03/Angelina-Jolie-photo-Netflix-Alexei-Hay-e1646407877581.jpeg?w=681&h=383&crop=1'},

    {image: 'https://gsr.dev/material2-carousel/assets/demo.png'}, 

  ];

}
