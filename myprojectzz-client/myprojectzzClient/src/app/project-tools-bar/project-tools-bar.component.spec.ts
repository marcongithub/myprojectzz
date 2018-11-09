import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectToolsBarComponent } from './project-tools-bar.component';

describe('ProjectToolsBarComponent', () => {
  let component: ProjectToolsBarComponent;
  let fixture: ComponentFixture<ProjectToolsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectToolsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectToolsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
