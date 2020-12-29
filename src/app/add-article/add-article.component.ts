import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  title: any = '';
  body: any = '';

  constructor(private http:HttpClient,private toaster:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }

  addArticle() {

    if(!this.title || !this.body){
      this.toaster.error("Article Title or Body Cannot be Empty");
      return;
    }
  
    const newArticle = {
      title:this.title,
      body:this.body
    }

    this.http.post('https://strapicms-articles-crud-amp.herokuapp.com/articles',newArticle)
    .subscribe(res=>{
      this.toaster.success("Article Added to Lists","Success");
      this.router.navigate(['articles/lists']);
    },err=>{
      this.toaster.error(err['error'].error,"Error");
    });
    
  }

}
