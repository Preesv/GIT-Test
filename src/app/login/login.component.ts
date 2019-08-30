import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 username = 'in28mins';
 password = 'abcd';
 invalidLogin = false;

 constructor(private router : Router) { }

  ngOnInit() {
  }

handleLogin () {
  console.log('In handleLogin' + this.username + " "+ this.password);
  if (this.username === "preeti" && this.password === "abcd") {
    this.router.navigate(['welcome', this.username]);
    this.invalidLogin = false;
  }
  else {
    this.invalidLogin = true;

  }
}

}
