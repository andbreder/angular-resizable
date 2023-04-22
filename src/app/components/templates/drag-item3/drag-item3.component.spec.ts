import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragItem3Component } from './drag-item3.component';

describe('DragItem3Component', () => {
  let component: DragItem3Component;
  let fixture: ComponentFixture<DragItem3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragItem3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragItem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
