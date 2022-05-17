import { Component, OnInit } from '@angular/core';
import { AccAccount } from 'src/app/model/accurate-account';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  person: AccAccount = {
    email: 'email',
    name: 'ime',
    surname: 'prezime'
  }
  constructor(private musicService: MusicService) { }

  ngOnInit(): void {
    this.musicService.getAccAccount().subscribe(
      (res) => this.person=res 
    )
  }

}