import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { createCustomElement } from "@angular/elements";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { MyTodoComponent } from "./my-todo/my-todo.component";
import { GitReposComponent } from "./git-repos/git-repos.component";

@NgModule({
  declarations: [AppComponent, MyTodoComponent, GitReposComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  entryComponents: [MyTodoComponent, GitReposComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const myTodoElment = createCustomElement(MyTodoComponent, {
      injector: this.injector
    });
    customElements.define("mytodo-element", myTodoElment);

    const githubStars = createCustomElement(GitReposComponent, {
      injector: this.injector
    });
    customElements.define("github-stars", githubStars);
  }
}
