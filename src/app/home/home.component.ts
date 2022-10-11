
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: any = [];
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
     this.posts = data["posts"];
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get("https://cdn.antopilo.dev/blog/blog.json");
  }
  ngOnInit(): void {
  }

}
