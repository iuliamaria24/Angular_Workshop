import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  { path: 'pipes', component: PipesComponent },
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
