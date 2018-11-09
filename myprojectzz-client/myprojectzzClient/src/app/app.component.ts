import {Component, HostListener, OnInit} from '@angular/core';
import {Project} from './model/project';
import {ProjectListService} from './service/core/project-list.service';

@Component({
  selector: 'pz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myprojectzzClient';

  private selectedProject: Project;

  constructor(private projectListService: ProjectListService) {
  }

  ngOnInit(): void {
    this.projectListService.projectSelectionEvent.subscribe(project => this.handleProjectSelectionEvent(project));
  }

  private handleProjectSelectionEvent(project: Project) {
    this.selectedProject = project;
  }

}
