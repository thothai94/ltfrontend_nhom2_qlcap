import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization': '-'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient:HttpClient,
  ) { }

  logIn(userName:string, userPassword:string) {
    console.log(userName + '-' + userPassword);
    return this.httpClient.post(
      'https://vnpt.fastlms.vn/api/Account/login',
      {
        "username": userName,
        "password": userPassword
      }
    );
    // .subscribe((data:any) => {
    //   //Xy ly khi ket qua tra ve thanh cong
    //   localStorage.setItem('access_token', data.object.accessToken);

    // }, (error:any) => {
    //   //Xu ly khi ket qua tra ve khong thanh cong
    //   console.log(error.error.message);
      
    // })
  }

  checkUser() {
    let accessToken = localStorage.getItem("access_token");
    let accessTokenHeader = "Bearer " + accessToken;
    httpOptions.headers = httpOptions.headers.set('Authorization', accessTokenHeader);

    this.httpClient.get(
      'https://vnpt.fastlms.vn/api/Account/get-current',
      { headers: httpOptions.headers },
    ).subscribe((data:any) => {
      //Xy ly khi ket qua tra ve thanh cong
      console.log(data);
      alert('Đã đăng nhập!');
      // this.currentUserName = data.object.username;
      // this.currentUserEmail = data.object.email;

    }, (error:any) => {
      //Xu ly khi ket qua tra ve khong thanh cong
      console.log(error);
      alert('Chưa đăng nhập!');

    })    

  }
}
