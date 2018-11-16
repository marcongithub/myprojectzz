import {Component, OnInit} from '@angular/core';
import {ProjectListService} from '../service/core/project-list.service';
import {ProjectTask} from '../model/project-task';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../model/project';

@Component({
  selector: 'pz-task-tools-bar',
  templateUrl: './task-tools-bar.component.html',
  styleUrls: ['./task-tools-bar.component.css']
})
export class TaskToolsBarComponent implements OnInit {

  private selectedTask: ProjectTask;

  private selectedProject: Project;

  constructor(private projectListService: ProjectListService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.projectListService.taskSelectionEvent.subscribe(projectTask => this.selectedTask = projectTask);
    this.loadProject();
  }

  isEditTaskEnabled(): boolean {
    return this.selectedTask !== undefined;
  }

  editTask(): void {
    // http://localhost:4200/projects/(2/edit-task//toolbar:2/edit-task)(navbar:tasknavbar)
    const url = this.url(this.selectedProject.id, this.selectedTask.id);
    this.router.navigateByUrl(url);
  }

  addTask(): void {
    const url = this.url(this.selectedProject.id, '-1');
    this.router.navigateByUrl(url);
  }

  back() {
    this.router.navigateByUrl('/projects(navbar:projectsnavbar)');
  }

  private url(projectId: string, taskId: string): string {
    return `/projects/(${projectId}/edit-task/${taskId}//toolbar:${projectId}/edit-task/${taskId})(navbar:tasknavbar)`;
  }

  private loadProject() {
    this.selectedProject = this.projectListService.loadProject(this.route.snapshot.params['projectId']);
  }

}
