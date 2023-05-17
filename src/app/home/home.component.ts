import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TodoItem } from 'src/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  todoItems: TodoItem[] = [
    { title: 'Install Angular CLI', description: 'Test1', completed: true },
    { title: 'Item 2', description: 'Test2', completed: false },
  ]

  newItem: TodoItem = {
    title: '',
    description: '',
    completed: false
  }

  constructor(private http: HttpClient) { this.getItems() }

  getItems () {
  }

  createItem() {
    console.log(this.newItem);
  }

}
