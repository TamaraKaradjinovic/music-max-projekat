import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Festival } from '../model/festival';
import { News } from '../model/news';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FestivalService {


  private readonly url = 'http://localhost:9000/music-max/festival';

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    public router: Router
  ) { }


   
  getOngoing() {
    return this.http.get<Festival[]>(
      this.url + '/ongoing-festivals'
    );  
  }

  getPast() {
    return this.http.get<Festival[]>(
      this.url + '/past-festivals'
    );  
  }

  postComment(comment: string, id: number) {
    return this.http.post<Comment>(
      this.url + '/comment' ,
      {
        festivalId: id,
        text: comment
      }
    );   
  }

  postNews(news: News) {
    return this.http.post<News>(
      this.url + '/news' ,
      news
    );  
  }

  getNews() {
    return this.http.get<News[]>(
      this.url + '/news' 
    )
  }
}
