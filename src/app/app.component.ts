
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'antopilo-dev';

  posts: any = []
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
     this.posts = data["posts"];
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get("https://cdn.antopilo.dev/blog/blog.json");
  }
  

}
