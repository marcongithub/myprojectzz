import {Component, OnInit} from '@angular/core';
import {ProjectListService} from '../service/core/project-list.service';
import {Project} from '../model/project';

@Component({
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  private projects: Project[];

  private selectedProject: Project;

  constructor(private projectListService: ProjectListService) {
  }

  ngOnInit() {
    this.projects = this.projectListService.loadProjects();
  }

  selectProject(project: Project): void {
    if (this.isSelected(project)) {
      this.selectedProject = undefined;
    } else {
      this.selectedProject = project;
    }
    this.projectListService.projectSelectionEvent.emit(this.selectedProject);
  }

  isSelected(project: Project): boolean {
    const isSame: boolean = (project !== undefined && this.selectedProject !== undefined) && project.title === this.selectedProject.title;
    return isSame;
  }


}
