import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = [
    {id : 1, description : 'Learn Angular'},
    {id : 2, description : 'Learn Spring'},
    {id : 3, description : 'Learn SpringBoot'},
    {id : 4, description : 'Be a Certified Scrum Master'},
]
  constructor() { }

  ngOnInit() {
  }

}
