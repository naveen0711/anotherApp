import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Movie } from './movie';
import 'rxjs/add/operator/map';
@Injectable()
export class MovieService {

  constructor(private http: Http) { }
  //get movies
  // {.map((res)=>{res.json();})}
  getMovie() {
    return this.http.get('http://localhost:3000/movie')
      .map((res) =>
        res.json()
      );
  }
  addMovie(newMovie) {
    let header = new Headers();
    header.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:3000/movie', newMovie)
      .map((res) =>
        res.json()
      );
  }
  //delete movies
  deleteMovie(id) {
    return this.http.delete('http://localhost:3000/movie/' + id)
      .map(res => res.json());
  }

  //update movies

  updateMovie(id, movieObj) {
    return this.http.put('http://localhost:3000/movie/' + id, movieObj)
      .map(res => res.json());
  }
}
