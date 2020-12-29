import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { AppComponent } from './app.component';
import { AuthguardService } from './authguard.service';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { HomeComponent } from './home/home.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', canActivate: [AuthguardService], component: HomeComponent },
  { path: 'articles/lists', canActivate: [AuthguardService], component: ListArticlesComponent },
  { path: 'article/add', canActivate: [AuthguardService], component: AddArticleComponent },
  { path: 'article/edit/:id', canActivate: [AuthguardService], component: EditArticleComponent },
  { path: '**', redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
