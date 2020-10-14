import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAppComponent } from './list-app/list-app.component';
import { PostAppComponent } from './post-app/post-app.component';
import { CausewayStarsListComponent } from './causeway-stars-list/causeway-stars-list.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'month-list'
  },
  {
    path:'month-list',
    component: ListAppComponent
  },
  {
    path:'post-app',
    component: PostAppComponent
  },
  {
    path:'causeway-stars',
    component: CausewayStarsListComponent
  },
  {
    path: '**',
    redirectTo: 'month-list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
