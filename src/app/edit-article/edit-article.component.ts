import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  body:any = '';
  title:any = '';

  constructor() { }

  ngOnInit(): void {
  }

  editArticle() {

  }

}
