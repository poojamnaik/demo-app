import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAppComponent } from './list-app/list-app.component';
import { PostAppComponent } from './post-app/post-app.component';
import { CausewayStarsListComponent } from './causeway-stars-list/causeway-stars-list.component';

import { FormsModule } from '@angular/forms';
import { DeepLinkComponent } from './deep-link/deep-link.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAppComponent,
    PostAppComponent,
    CausewayStarsListComponent,
    DeepLinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
