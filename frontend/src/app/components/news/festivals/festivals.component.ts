import { Component, OnInit } from '@angular/core';
import { Festival } from 'src/app/model/festival';

@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.component.html',
  styleUrls: ['./festivals.component.css']
})
export class FestivalsComponent implements OnInit {
  ongoingFestivals!: Festival[]
  finishedFestivals!: Festival[]

  constructor() { }

  ngOnInit(): void {
    // dobavljanje
  }

}
