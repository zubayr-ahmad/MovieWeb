import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';

// Custom Modules Imports


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NowPlayingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Custom Modules
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
