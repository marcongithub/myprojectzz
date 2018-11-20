import {Component, OnInit} from '@angular/core';
import {ProjectListService} from '../service/core/project-list.service';
import {ProjectTask} from '../model/project-task';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {Project} from '../model/project';

@Component({
  selector: 'pz-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  selectedTask: ProjectTask;

  private selectedProjectId: string;


  constructor(private projectListService: ProjectListService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot;
    this.selectedProjectId = snapshot.params['projectId'];
    this.loadTask(snapshot.params['taskId']);
  }

  private loadTask(taskId: string) {
    if (taskId !== undefined && Number(taskId) > 0) {
      this.selectedTask = this.projectListService.loadTask(taskId);
    } else {
      // create new
      const selectedProject: Project = this.projectListService.loadProject(this.selectedProjectId);
      this.selectedTask = ProjectTask.fromObject({project: selectedProject});
    }
  }
}
