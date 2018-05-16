import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { PostComponent } from './post/post.component';
import { PostShowComponent } from './post-show/post-show.component';
import { PostNewComponent } from './post-new/post-new.component';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [

  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'posts',
    component: PostComponent
  },
  {
    path: 'posts/:id',
    component: PostShowComponent
  },
  {
    path: 'post/new',
    component: PostNewComponent
  }


]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
