import { MovieService } from './../shared/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movies;
  constructor(
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
  }

  delete(id) {
    this.movieService.deleteMovie(id).subscribe(() => {
      this.getMovies();
      console.log('del');
    });
  }

}
