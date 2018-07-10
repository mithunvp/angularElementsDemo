import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { GitHubRepoStars } from "./GitHubRepoStars";
import { Observable } from "rxjs";

@Component({
  selector: "app-git-repos",
  templateUrl: "./git-repos.component.html",
  styleUrls: ["./git-repos.component.css"],
  encapsulation: ViewEncapsulation.Native
})
export class GitReposComponent implements OnInit {
  userName: string;
  gitRepos: Observable<GitHubRepoStars>;
  constructor(private http: HttpClient) {}

  ngOnInit() {}

    searchUserRepos() {
      this.http.get(`https://api.github.com/users/${this.userName}/repos`).
          pipe(
          map((item: any) => item.map(p=> <GitHubRepoStars>
              {
                name: p.name,
                starsCount: p.stargazers_count

              })))          
          .subscribe((data) => {
          this.gitRepos = data;
      });
  }
}
