import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { MusicService } from 'src/app/services/music.service';
import { AddSongComponent } from '../songs/add-song/add-song.component';

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
    
    this.service.getAllGenres().subscribe(
      (res) => {
        this.genres = res
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

  logout() {
    this.authService.logout()
  }

}


