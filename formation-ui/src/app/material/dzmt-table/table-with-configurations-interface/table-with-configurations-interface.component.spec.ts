import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithConfigurationsInterfaceComponent } from './table-with-configurations-interface.component';

describe('TableWithConfigurationsInterfaceComponent', () => {
  let component: TableWithConfigurationsInterfaceComponent;
  let fixture: ComponentFixture<TableWithConfigurationsInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWithConfigurationsInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithConfigurationsInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
