import {Component, OnInit} from '@angular/core';
import {Project} from '../model/project';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectTask} from '../model/project-task';
import {ProjectListService} from '../service/core/project-list.service';

@Component({
  selector: 'pz-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasksOfProject: ProjectTask[];

  private selectedTask: ProjectTask;

  constructor(private router: Router, private route: ActivatedRoute, private projectListService: ProjectListService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.loadProject(params['projectId']));
  }

  private loadProject(param: number) {
    console.log('loading project: ' + param);
    const project: Project = this.projectListService.loadProject(param);
    this.tasksOfProject = project.tasks;
  }

  selectTask(projectTask: ProjectTask): void {
    if (this.isSelected(projectTask)) {
      this.selectedTask = undefined;
    } else {
      this.selectedTask = projectTask;
    }
    this.projectListService.taskSelectionEvent.emit(this.selectedTask );
  }

  isSelected(projectTask: ProjectTask): boolean {
    const isSame: boolean = (projectTask !== undefined && this.selectedTask !== undefined) && projectTask.title === this.selectedTask.title;
    return isSame;
  }

}
