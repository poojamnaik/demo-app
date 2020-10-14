import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsAppComponent } from './details-app/details-app.component';
import { MonthDetailsComponent } from './month-details/month-details.component';
import { CausewayStarDetailsComponent } from './causeway-star-details/causeway-star-details.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'holiday-details'
  },
  {
    path:'holiday-details',
    component: DetailsAppComponent
  },
  {
    path:'month-details',
    component: MonthDetailsComponent
  },
  {
    path:'causeway-star-details',
    component: CausewayStarDetailsComponent
  },
  {
    path: '**',
    redirectTo: 'holiday-details'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
