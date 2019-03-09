import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  movie: any = {};
  movieForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  createForm() {
    this.movieForm = this.formBuilder.group({
      movieName: ['', Validators.required ],
      category: ['', Validators.required ],
      details: ['', Validators.required ],
    });
  }

  getMovie() {
    this.route.params.subscribe(params => {
      this.movieService.getMovie(params['id']).subscribe(res => {
        this.movie = res;
      });
    });
  }

  update(movieName, category, details) {
    this.route.params.subscribe(params => {
      this.movieService.updateMovie(movieName, category, details, params['id']);
      this.getMovie();
      this.router.navigate(['/movies']);
    });
  }

  ngOnInit() {
    this.getMovie();
    this.createForm();
  }











}
