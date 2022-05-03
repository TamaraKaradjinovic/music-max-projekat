import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
 
  private readonly url = 'http://localhost:9000/music-max/forum';
  

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }


  getTopic(topic: string) {
    return this.http.get<Post[]>(
      this.url + '/topic/' + topic+ ''
    );
  }

  getAllTopics() {
    return this.http.get<string[]>(
      this.url + '/topic-names'
    );
  }

  postTopic(topic: string) {
    return this.http.post<Post>(
      this.url + '/topic/' + topic+ '',
      ' '
    );
  }

  postComment(topic: string, comment: string, userEmail: string) {
   return this.http.post<Post>(
      this.url + '/post/' + topic+ '',
      {
        comment: comment,
        userEmail: userEmail
      }
    );
  } 
}
