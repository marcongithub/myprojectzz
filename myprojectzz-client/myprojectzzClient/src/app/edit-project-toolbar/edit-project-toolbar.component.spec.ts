import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectToolbarComponent } from './edit-project-toolbar.component';

describe('EditProjectToolbarComponent', () => {
  let component: EditProjectToolbarComponent;
  let fixture: ComponentFixture<EditProjectToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjectToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
