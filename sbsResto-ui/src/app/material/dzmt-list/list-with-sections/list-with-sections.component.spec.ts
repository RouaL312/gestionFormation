import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithSectionsComponent } from './list-with-sections.component';

describe('ListWithSectionsComponent', () => {
  let component: ListWithSectionsComponent;
  let fixture: ComponentFixture<ListWithSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWithSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWithSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
