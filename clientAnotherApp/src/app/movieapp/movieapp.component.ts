import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
@Component({
  selector: 'app-movieapp',
  templateUrl: './movieapp.component.html',
  styleUrls: ['./movieapp.component.css'],
  providers: [MovieService]
})
export class MovieappComponent implements OnInit {
  movies: any[] = [];
  m;
  title: string;
  url: string;
  updatedTitle: string;
  updatedUrl: string;
  updatedId: string;
  constructor(private movie: MovieService) { }
  ngOnInit() {
    this.movie.getMovie()
      .subscribe((movies) => {
        this.m = movies
      });
  }
  addMovieeee() {
    console.log('adding movie to db');
    let newMovie = {
      title: this.title,
      url: this.url
    }
    console.log(this.title);
    console.log(this.url);
    this.movie.addMovie(newMovie)
      .subscribe(mov => {
        this.movies.push(mov);
        this.ngOnInit();
      });
    console.log('Movie added to db');
  }

  //delete movies
  deleteMovieees(Movieid) {
    console.log(Movieid);
    this.movie.deleteMovie(Movieid).subscribe(data => {
      console.log(data)
      this.ngOnInit();
    })
  }
  //Edit movies
  EditMovie(mo: any) {
    console.log('Editing movie');
    console.log(mo);
    this.updatedTitle = mo.title;
    this.updatedUrl = mo.url;
    this.updatedId = mo._id;
  }

  //update 
  update() {
    console.log(this.updatedId);
    let movieObj = {
      "_id": this.updatedId,
      "title": this.updatedTitle,
      "url":this.updatedUrl
    }
    this.movie.updateMovie( this.updatedId, movieObj).subscribe(data => {
      console.log(data)
      this.ngOnInit();
    })
  }
}
