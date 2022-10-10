import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {

  markdownUrl = "";
  
  constructor(private mdService:MarkdownService, private router: Router)
  {
    router.url;
    console.log(router.url)

    this.markdownUrl = "https://cdn.antopilo.dev" + router.url;
  }

  ngOnInit(): void {
  }

}
