import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccAccount } from 'src/app/model/accurate-account';
import { News } from 'src/app/model/news';
import { AuthService } from 'src/app/services/auth.service';
import { FestivalService } from 'src/app/services/festival.service';
import { MusicService } from 'src/app/services/music.service';
import { AddNewsComponent } from '../news/add-news/add-news.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading = true;
  newsList: News[] = []
  person!: AccAccount

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private musicService: MusicService,
    private festivalService: FestivalService,
  ) { }

  ngOnInit(): void {
    this.musicService.getAccAccount().subscribe(
      (res) => {
        this.person = res
        this.festivalService.getNews().subscribe(
          (res) => {
            this.newsList = res
            console.log(JSON.stringify(res));
            
            this.loading = false
          }
        )
      }
    )
  }

  
  adminLogged() {
    const role = this.authService.getRoleCookie()
    return ( role === 'admin')
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddNewsComponent, {
      autoFocus: false,
      maxHeight: '90vh',
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}