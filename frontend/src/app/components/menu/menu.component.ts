import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MusicService } from 'src/app/services/music.service';
import { AddSongComponent } from '../add-song/add-song.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service: MusicService) { }

  genres: string[] = []
  
  ngOnInit(): void {

    this.service.getAllGenres().subscribe(
      (res) => {
        console.log('genres found')
        this.genres = res
        console.log(this.genres)

      }
    );
  }
  
  

}


