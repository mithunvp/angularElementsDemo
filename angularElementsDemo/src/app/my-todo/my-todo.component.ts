import { Component, OnInit } from "@angular/core";
import { FormsModule } from '@angular/forms';

@Component({
  selector: "app-my-todo",
  templateUrl: "./my-todo.component.html",
  styleUrls: ["./my-todo.component.css"]
})
export class MyTodoComponent implements OnInit {
  myTodos: string[] = [];
  newTodo: string;
  constructor() {}

  ngOnInit() {
    this.myTodos = ["Pay Bills", "Clean Car", "Pay Taxes"];
  }

  addMyTodo() {
    this.myTodos.push(this.newTodo);
    this.newTodo = "";
  }
}