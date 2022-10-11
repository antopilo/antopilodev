
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-blog-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.scss']
})

export class BlogIndexComponent implements OnInit 
{
  markdown = '';

  posts: any = [];
  markdownUrl = "";
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
     this.posts = data["posts"];
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get("https://cdn.antopilo.dev/blog/blog.json");
  }

  ngOnInit()  
  {
      
  }

}
