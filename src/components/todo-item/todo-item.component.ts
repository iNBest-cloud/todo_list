import { Component, Input } from '@angular/core';
import { TodoItem } from 'src/interfaces';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() itemData: TodoItem = { title: '', description: '', completed: false};

}
