import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  username: string;
  password: string;
  router: any;
  invalidLogin: boolean;

  constructor() { }

  authenticate (username, password) {
    if (this.username === "preeti" && this.password === "abcd") {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
  
    }


  }
}
