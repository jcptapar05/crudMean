import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieService } from './../shared/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  movieForm: FormGroup;
  categories = ['horror', 'comedy', ];
  constructor(
    private formBuilder: FormBuilder,
    private movieService: MovieService,
    private router: Router
  ) {}

  createForm() {
    this.movieForm = this.formBuilder.group({
      movieName: ['', Validators.required ],
      category: ['', Validators.required ],
      details: ['', Validators.required ],
    });
  }

  ngOnInit() {
    this.createForm();
  }

  add(movieName, category, details): void {
    this.movieService.addMovie(movieName, category, details).subscribe(_ => {
      console.log('Done');
    });
    this.router.navigate(['/']);
  }



}
