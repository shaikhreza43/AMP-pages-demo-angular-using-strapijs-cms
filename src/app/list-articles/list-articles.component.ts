import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

  articles:any = [
    {id:1,title:'My First Title',body:"Hello World"},
    {id:2,title:'React is Awesome',body:"One of the Most Popular Javascript Library"}
  ];

  p: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  deleteArticleById(id){
  this.articles.splice(this.articles.findIndex(article=>article.id===id),1);
  }

}
