import { NgModule, SecurityContext } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogIndexComponent } from './blog-index/blog-index.component';
import { ContactComponent } from './contact/contact.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlogArticleComponent } from './blog-article/blog-article.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    BlogIndexComponent,
    ContactComponent,
    BlogArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient,
    sanitize: SecurityContext.NONE }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
