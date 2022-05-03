import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor() { }
  
  topics: string[] = ['topic1', 'topic2']
  topic! : string

  ngOnInit(): void {
  }

  post(){

  }

}
