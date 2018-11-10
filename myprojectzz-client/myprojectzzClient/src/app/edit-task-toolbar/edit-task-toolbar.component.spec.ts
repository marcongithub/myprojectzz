import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaskToolbarComponent } from './edit-task-toolbar.component';

describe('EditTaskToolbarComponent', () => {
  let component: EditTaskToolbarComponent;
  let fixture: ComponentFixture<EditTaskToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTaskToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTaskToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
