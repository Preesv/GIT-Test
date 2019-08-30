import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  error_msg = "Some unexpected error occured, please contact support team.";
  
  constructor() { }

  ngOnInit() {
  }

}
