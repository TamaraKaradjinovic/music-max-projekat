import { Component, Input, OnInit } from '@angular/core';
import { Festival } from 'src/app/model/festival';

@Component({
  selector: 'app-festival-card',
  templateUrl: './festival-card.component.html',
  styleUrls: ['./festival-card.component.css']
})
export class FestivalCardComponent implements OnInit {

  @Input() festival!: Festival
  constructor() { }

  ngOnInit(): void {

  }
  
  openDialog(){

  }
}
