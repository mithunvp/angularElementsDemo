import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { createCustomElement } from "@angular/elements";

import { AppComponent } from "./app.component";
import { MyTodoComponent } from "./my-todo/my-todo.component";

@NgModule({
  declarations: [AppComponent, MyTodoComponent],
  imports: [BrowserModule, FormsModule],
  entryComponents: [MyTodoComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const myTodoElment = createCustomElement(MyTodoComponent, {
      injector: this.injector
    });
    customElements.define("mytodo-element", myTodoElment);
  }
}
