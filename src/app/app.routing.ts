import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { PostComponent } from './post/post.component';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [

  {
    path: '',
    component: HomepageComponent
  },
  {

    path: 'posts',
    component: PostComponent
  }


]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
