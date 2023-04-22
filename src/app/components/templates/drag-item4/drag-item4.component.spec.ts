import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragItem4Component } from './drag-item4.component';

describe('DragItem4Component', () => {
  let component: DragItem4Component;
  let fixture: ComponentFixture<DragItem4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragItem4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragItem4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
