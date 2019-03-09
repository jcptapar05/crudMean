import { Movie } from './movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  api = 'http://localhost:3000/movies';
  constructor(
    private http: HttpClient
  ) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.api);
  }

  addMovie(movieName, category, details): Observable<Movie> {
    const obj = {
      movieName: movieName,
      category: category,
      details: details
    };
    console.log(obj);
    return this.http.post<Movie>(`${this.api}/add`, obj).pipe(
      tap(_ => console.log('Sucessfully added!'))
    );
  }

  getMovie(id) {
    return this.http.get(`${this.api}/edit/${id}`);
  }

  updateMovie(movieName, category, details, id) {
    const obj = {
      movieName: movieName,
      category: category,
      details: details
    };
    this.http.post(`${this.api}/update/${id}`, obj).subscribe(res => {
      console.log('Done');
    });
  }

  deleteMovie(id) {
    return this.http.get(`${this.api}/delete/${id}`);
  }






}
