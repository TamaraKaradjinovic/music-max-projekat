import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Song } from '../model/song';
import { Genre } from '../model/genre';
import { SongPost } from '../model/song-post';

const httpOptions = {
  headers: new HttpHeaders()
}

httpOptions.headers.append('Access-Control-Allow-Headers', '*');
httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
httpOptions.headers.append('Access-Control-Allow-Origin', '*');
httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
httpOptions.headers.append('Content-Type', 'application/json');
httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');


@Injectable({
  providedIn: 'root'
})
export class MusicService {



  private readonly url = 'http://localhost:9000/music-max/music';

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  getSongs() {
    return this.http.get<Song[]>(
      this.url + '/songs', {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
    );
  }

  getSong(name: string) {
    return this.http.get<Song>(
      this.url + '/song/' + name, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
    );
  }

  getAllSingers() {
    return this.http.get<string[]>(
      this.url + '/singers', {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
    );
  }

  getAllGenres() {
    return this.http.get<string[]>(
      this.url + '/genres', { headers: httpOptions.headers }
    );
  }

  getAllSingersId() {
    return this.http.get<{ id: number, stageName: string }[]>(
      this.url + '/id-singers', { headers: httpOptions.headers }
    );
  }

  getAllAuthorsId() {
    return this.http.get<{ id: number, stageName: string }[]>(
      this.url + '/id-authors', { headers: httpOptions.headers }
    );
  }

  getAllGenresId() {
    return this.http.get<Genre[]>(
      this.url + '/id-genres', { headers: httpOptions.headers }
    );
  }

  postSong(model: SongPost) {    
    return this.http.post<SongPost>(
    this.url + '/song', model
  );
  }


}
