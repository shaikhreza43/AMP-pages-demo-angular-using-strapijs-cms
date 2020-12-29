import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  body: any = '';
  title: any = '';
  id: any = '';

  existingArticle: any = '';

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private toaster: ToastrService) {

    this.route.queryParams.subscribe((params) => {
      this.id = params["id"];
    });
  }

  ngOnInit(): void {
    this.http.get('https://strapicms-articles-crud-amp.herokuapp.com/articles/' + this.id).subscribe(res => {
      this.existingArticle = res;
      this.title = this.existingArticle.title;
      this.body = this.existingArticle.body;
    }, err => {
      this.toaster.error(err['error'].error, "Error");
    });
  }

  editArticle() {
    this.http.put('https://strapicms-articles-crud-amp.herokuapp.com/articles/' + this.id, { title: this.title, body: this.body })
      .subscribe(res => {
        this.toaster.success("Updated Successfully", "Updated");
        this.router.navigate(['articles/lists']);
      }, err => {
        this.toaster.error(err['error'].error, "Error");
      });
  }

}
