import {Component, OnInit} from '@angular/core';
import {ProjectListService} from '../service/core/project-list.service';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../model/project';
import {ProjectTask} from '../model/project-task';

@Component({
  selector: 'pz-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  selectedProject: Project;

  constructor(private projectListService: ProjectListService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadProject();
  }

  private loadProject(): void {
    const projectId = this.route.snapshot.params['projectId'];
    if (projectId !== undefined && Number(projectId) > 0) {
      this.selectedProject = this.projectListService.loadProject(projectId);
    } else {
      // create new
      this.selectedProject = new Project();
    }
  }

}
