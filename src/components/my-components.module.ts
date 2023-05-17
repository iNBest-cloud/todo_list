import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ TodoItemComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [ TodoItemComponent ]
})
export class MyComponentsModule { }
