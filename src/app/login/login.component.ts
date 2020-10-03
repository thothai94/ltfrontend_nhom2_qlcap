import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  msg:string = '';
  userPassword:string = '';
  userName:string = '';
  success:boolean = false;
  accessToken:string = '';

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  signIn(): void {
    this.authService.logIn(this.userName, this.userPassword).subscribe((data:any) => {
        //Xy ly khi ket qua tra ve thanh cong
        localStorage.setItem('access_token', data.object.accessToken);
        this.router.navigateByUrl('/home');
  
      }, (error:any) => {
        //Xu ly khi ket qua tra ve khong thanh cong
        console.log(error.error.message);
      })
  }  
}
