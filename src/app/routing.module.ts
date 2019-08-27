import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router'

import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { PostsWrapperComponent } from './components/posts-wrapper/posts-wrapper.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';

// const routes: Routes = [
//   { path: "companies", outlet: "mid-content", component:  WelcomePageComponent},
//   { path: "companies/:slug", children: [
//     { path: "", outlet: "mid-content", component: PostsWrapperComponent},
//     { path: "", outlet: "right-content", component: CompanyInfoComponent}
//   ]},
//   { path: "**", redirectTo: "/companies" }
// ]

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