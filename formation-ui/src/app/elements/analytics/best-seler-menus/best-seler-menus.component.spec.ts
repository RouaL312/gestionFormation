import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSelerMenusComponent } from './best-seler-menus.component';

describe('BestSelerMenusComponent', () => {
  let component: BestSelerMenusComponent;
  let fixture: ComponentFixture<BestSelerMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSelerMenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSelerMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
