import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { News } from 'src/app/model/news';

export interface ViewNewsDialogData {
  news: News
}

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit {

  news!: News

  constructor( 
    public dialogRef: MatDialogRef<ViewNewsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ViewNewsDialogData,
    private _snackBar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.news = this.data.news
    console.log(this.news.video)
  }

}
