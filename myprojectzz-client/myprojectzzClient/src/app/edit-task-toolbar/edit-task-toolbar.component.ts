import {Component, OnInit} from '@angular/core';
import {ProjectListService} from '../service/core/project-list.service';
import {ProjectTask} from '../model/project-task';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'pz-edit-task-toolbar',
  templateUrl: './edit-task-toolbar.component.html',
  styleUrls: ['./edit-task-toolbar.component.css']
})
export class EditTaskToolbarComponent implements OnInit {

  private selectedTask: ProjectTask;

  constructor(private projectListService: ProjectListService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.loadTask(params['taskId']));
  }

  private loadTask(taskId: string) {
    this.selectedTask = this.projectListService.loadTask(taskId);
  }

  back(): void {
    const url = `projects/(${this.selectedTask.project.id}//toolbar:${this.selectedTask.project.id})(navbar:tasknavbar)`;
    this.router.navigateByUrl(url);
  }

}
