import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragItem2Component } from './drag-item2.component';

describe('DragItem2Component', () => {
  let component: DragItem2Component;
  let fixture: ComponentFixture<DragItem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragItem2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
