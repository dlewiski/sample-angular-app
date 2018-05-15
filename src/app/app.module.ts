import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostService } from './post/post.service';
import { HomepageComponent } from './homepage/homepage.component';
import { PostShowComponent } from './post-show/post-show.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HomepageComponent,
    PostShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
