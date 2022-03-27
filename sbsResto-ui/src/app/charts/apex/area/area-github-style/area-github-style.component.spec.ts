import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaGithubStyleComponent } from './area-github-style.component';

describe('AreaGithubStyleComponent', () => {
  let component: AreaGithubStyleComponent;
  let fixture: ComponentFixture<AreaGithubStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaGithubStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaGithubStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
