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
    fetch('https://m4q9bg6tyc.execute-api.us-east-2.amazonaws.com/dev/post', {
      method: 'POST',
      body: JSON.stringify({
        "title": "Test",
        "description": "Test",
        "completed": false
      })
    }).then(async (response) => {
      const result = await response.json();
      console.log(result);
    })
  }

  createItem() {
    console.log(this.newItem);
  }

}
