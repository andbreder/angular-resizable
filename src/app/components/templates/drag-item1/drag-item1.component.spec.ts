import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragItem1Component } from './drag-item1.component';

describe('DragItem1Component', () => {
  let component: DragItem1Component;
  let fixture: ComponentFixture<DragItem1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragItem1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragItem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
