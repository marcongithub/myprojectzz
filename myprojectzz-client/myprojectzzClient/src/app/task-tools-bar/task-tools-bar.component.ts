import {Component, OnInit} from '@angular/core';
import {ProjectListService} from '../service/core/project-list.service';
import {ProjectTask} from '../model/project-task';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'pz-task-tools-bar',
  templateUrl: './task-tools-bar.component.html',
  styleUrls: ['./task-tools-bar.component.css']
})
export class TaskToolsBarComponent implements OnInit {

  private selectedTask: ProjectTask;

  constructor(private projectListService: ProjectListService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.projectListService.taskSelectionEvent.subscribe(projectTask => this.selectedTask = projectTask);
  }

  isEditTaskEnabled(): boolean {
    return this.selectedTask !== undefined;
  }

  editTask(): void {
    // http://localhost:4200/projects/(2/edit-task//toolbar:2/edit-task)(navbar:tasknavbar)
    const projectId: string = this.selectedTask.project.id;
    const taskId: string = this.selectedTask.id;
    this.router.navigateByUrl(
      `/projects/(${projectId}/edit-task/${taskId}//toolbar:${projectId}/edit-task/${taskId})(navbar:tasknavbar)`
    );
  }

  back() {
    this.router.navigateByUrl('/projects(navbar:projectsnavbar)');
  }

}
