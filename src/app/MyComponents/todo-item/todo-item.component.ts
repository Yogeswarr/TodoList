import { Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo; // this will help to take input from a component 
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter()
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo)
    console.log("onClicked has been triggerd")
  }
  onCheckBox(todo: Todo){
    this.todoCheckBox.emit(todo)
  }
}
