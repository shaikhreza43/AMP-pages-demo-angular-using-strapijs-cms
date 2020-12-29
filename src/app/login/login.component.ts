import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: any = '';
  public password: any = '';
  hide: boolean = true;

  constructor(private toaster: ToastrService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  changePwdToTxtAndViceVersa() {
    this.hide = !this.hide
    var x = document.getElementById('password').getAttribute('type');
    if (x === 'password') {
      document.getElementById('password').setAttribute('type', 'text');
    }
    else if (x === 'text') {
      document.getElementById('password').setAttribute('type', 'password');
    }
  }

  onSubmit() {
    if (!this.username || !this.password) {
      this.toaster.error("Username or Password Cannot be Empty", "Validation", { timeOut: 2000 });
      return;
    }
    if (this.username === 'admin' && this.password === 'administrator') {
      this.toaster.success("LOGIN SUCCESS", "Success", { timeOut: 2000 });
      localStorage.setItem('authorized', "true");
      localStorage.setItem("jwt", "ejj3iieiineinieneh3h89h338389y8h83ububuebyeby8bdyh83y38y8989y89");
      this.router.navigate(['']);
    }
    else {
      this.http.post('https://strapicms-articles-crud-amp.herokuapp.com/auth/local', { identifier: this.username, password: this.password })
        .subscribe(res => {
          this.toaster.success("LOGIN SUCCESS", "Success", { timeOut: 2000 });
          localStorage.setItem('authorized', "true");
          localStorage.setItem("jwt", res['jwt']);
          this.router.navigate(['']);
        }, err => {
          this.toaster.error(err['error'].error, "Invalid Credentials Entered")
        });
    }
  }

}
