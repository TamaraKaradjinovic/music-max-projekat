import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor() { }
  value: number = 2020;


  dateS!: Date
  dateE!: Date
  
  ngOnInit(): void {
  }


  setStartingMonthAndYear(event:any, dp:any) {

  }

  setEndingMonthAndYear(event:any, dp:any) {

  }

}
