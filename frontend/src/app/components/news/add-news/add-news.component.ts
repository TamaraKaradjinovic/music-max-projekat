import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Festival } from 'src/app/model/festival';
import { News } from 'src/app/model/news';
import { FestivalService } from 'src/app/services/festival.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  isFestival: boolean = false

  festival: Festival = {
    id: -1,
    name: '',
    description: '',
    startDate: new Date(),
    endDate: new Date(),
    coverPhoto: null,
    comments: []
  }

  model: News = {
    title: '',
    content: '',
    type: '',
    audio: null,
    video: null,
    photos: [],
    festival: null
  }

  constructor(
    private _snackBar: MatSnackBar,
    private festivalService: FestivalService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  imageFileChange(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      let photo = e.target.result
      this.model.photos.push(photo!.slice(23))
      console.log(this.model);
    };
    reader.readAsDataURL(event.target.files[0]);
    console.log(this.model);
  }

  audioFileChange(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.model.audio = e.target.result
      this.model.audio = this.model.audio!.slice(22)
    };
    reader.readAsDataURL(event.target.files[0]);
    console.log(this.model);
  }

  videoFileChange(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.model.video = e.target.result
      this.model.video = this.model.video!.slice(22)
    };
    reader.readAsDataURL(event.target.files[0]);
    console.log(this.model);
  } 
  
  addNews() {
    if(this.isFestival)
      this.model.festival = this.festival
    this.festivalService.postNews(this.model).subscribe(
      (res) => {
        console.log("dodato!")

        this._snackBar.open("Successful", 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['snackbar'],
        });

        this.router.navigate(['/home'])
      }
    )
  }
}
