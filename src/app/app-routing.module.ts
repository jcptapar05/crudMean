import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { MovieComponent } from './movie/movie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/movies'  },
  { path: 'movies', component: MovieComponent },
  { path: 'movies/add', component: AddComponent },
  { path: 'movies/edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
