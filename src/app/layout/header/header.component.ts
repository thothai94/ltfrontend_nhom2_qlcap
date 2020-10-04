import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class HeaderComponent implements OnInit {

  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  constructor(
    private router: Router
  ) { }

  logOut() {
    console.log(localStorage.getItem("access_token"))
    localStorage.setItem("access_token", "")
    this.router.navigateByUrl('/login');
  }

  ngOnInit(): void {
  }

}
