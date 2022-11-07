import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.removeItem("my-application-token");
    this.router.navigateByUrl('/login');
  }

}
