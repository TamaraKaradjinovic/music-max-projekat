import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';

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
