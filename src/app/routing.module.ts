import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router'

import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { PostsWrapperComponent } from './components/posts-wrapper/posts-wrapper.component';

const routes: Routes = [
  { path: "companies", component:  WelcomePageComponent},
  { path: "companies/:slug", component: PostsWrapperComponent },
  { path: "**", redirectTo: "/companies" }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})

export class RoutingModule { }