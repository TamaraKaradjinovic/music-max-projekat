import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { MusicService } from 'src/app/services/music.service';
import { AddSongComponent } from '../add-song/add-song.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  email!: string

  constructor(
    private authService: AuthService, 
    private service: MusicService) { }

  genres: string[] = []
  
  ngOnInit(): void {
    console.log(this.authService.email);
    
    this.service.getAllGenres().subscribe(
      (res) => {
        console.log('genres found')
        this.genres = res
        console.log(this.genres)

      }
    );
  }
  
  guestLogged() {
    const role = this.authService.getRoleCookie()
    return ( role === 'guest')
  }

  adminLogged() {
    const role = this.authService.getRoleCookie()
    return (role === 'admin')
  }

  

}


