import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/model/song';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.css']
})
export class TopListComponent implements OnInit {

  songs: Song[] = []
  
  constructor(private musicService: MusicService) { }

  ngOnInit(): void {
    this.musicService.getTopList().subscribe(
      (res) => {
        this.songs = res
      }
    )
  }

}
