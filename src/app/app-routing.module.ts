import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { CollegeComponent } from './c/c.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'results/:text', component: ResultsComponent },
  { path: 'c/:name', component: CollegeComponent },
  { path: 'add/:name', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
