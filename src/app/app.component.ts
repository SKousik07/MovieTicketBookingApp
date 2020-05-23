import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { ArrayService } from './service/array.service';

export interface Food {
  value: string;
  viewValue : string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Bookit';
   
  user: firebase.User;

  constructor(private auth: AuthService, 
    private router: Router, public arrayService: ArrayService) { }

  ngOnInit() {
    this.auth.getUserState()
      .subscribe( user => {
        this.user = user;
      })
    this.arrayService.user=this.user;
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.auth.logout();
  }

  register() {
    this.router.navigate(['/signup']);
  }



}
