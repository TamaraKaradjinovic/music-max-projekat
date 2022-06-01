import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { News } from 'src/app/model/news';
import { ViewNewsComponent } from '../view-news/view-news.component';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  @Input() news!: News 
  cover!: Blob

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {    
    this.cover = this.news.photos[0]
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ViewNewsComponent, {
      data: { news : this.news },
      autoFocus: false,
      maxHeight: '90vh',
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
