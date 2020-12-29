import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

  articles: any = [
    { id: 1, title: 'My First Title', body: "Hello World" },
    { id: 2, title: 'React is Awesome', body: "One of the Most Popular Javascript Library" }
  ];

  p: number = 1;
  constructor(private http: HttpClient,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.http.get('https://strapicms-articles-crud-amp.herokuapp.com/articles').subscribe(res=>{
      this.articles = res;
    },err=>{
      this.toaster.error(err['error'],"Error");
    });
  }

  deleteArticleById(id) {
    // this.articles.splice(this.articles.findIndex(article => article.id === id), 1);
    this.http.delete('https://strapicms-articles-crud-amp.herokuapp.com/articles/'+id)
    .subscribe(res=>{
      this.toaster.info("Article Deleted","Success");
    },err=>{
      this.toaster.error(err['error'].error,"Error");
    });
  }

}
