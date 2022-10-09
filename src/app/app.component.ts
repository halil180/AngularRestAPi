import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http:HttpClient){
  }

  posts:any[]= [];
  

  title = 'angularhttp';

  loadPosts(){
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((posts:any) => {
     this.posts = posts;
     console.log(posts)
    })
  }


  createPost(){
    this.http
    .post("https://jsonplaceholder.typicode.com/posts",{
      title:'hi',
      body:'this is  body'
    })
    .subscribe((response:any) => {
     console.log(response)
     }),
     (error:any)=> {
      console.log(error)
     }
  }




  deletePost(){
    this.http
    .delete("https://jsonplaceholder.typicode.com/posts/1")
    .subscribe((response:any) => {
     console.log(response)
     }),
     (error:any)=> {
      console.log(error)
     }

  }
}
