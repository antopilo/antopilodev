import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogIndexComponent } from './blog-index/blog-index.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogIndexComponent },
  { path: 'blog/:article', component: BlogArticleComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({

  imports: [RouterModule.forRoot(routes, { useHash: Boolean(history.pushState) === false })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
