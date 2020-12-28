import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username:any = '';
  public password:any='';

  constructor(private toaster:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.username || !this.password){
      this.toaster.error("Username or Password Cannot be Empty","Validation",{timeOut:2000});
      return;
    }
    if(this.username==='admin'&&this.password==='administrator'){
      this.toaster.success("LOGIN SUCCESS","Success",{timeOut:2000});
      localStorage.setItem('authorized',"true");
      localStorage.setItem("accessToken","ejj3iieiineinieneh3h89h338389y8h83ububuebyeby8bdyh83y38y8989y89");
      this.router.navigate(['']);
    }
    else{
      this.toaster.error("Either Username or Password is not Correct","Invalid Credentials Entered",{timeOut:2000});
    }
  }

}
