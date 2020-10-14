import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsAppComponent } from './details-app/details-app.component';
import { MonthDetailsComponent } from './month-details/month-details.component';
import { CausewayStarDetailsComponent } from './causeway-star-details/causeway-star-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsAppComponent,
    MonthDetailsComponent,
    CausewayStarDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
