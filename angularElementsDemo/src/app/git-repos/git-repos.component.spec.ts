import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitReposComponent } from './git-repos.component';

describe('GitReposComponent', () => {
  let component: GitReposComponent;
  let fixture: ComponentFixture<GitReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
