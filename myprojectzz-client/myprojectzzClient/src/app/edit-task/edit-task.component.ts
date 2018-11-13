import {Component, OnInit} from '@angular/core';
import {ProjectListService} from '../service/core/project-list.service';
import {ProjectTask} from '../model/project-task';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'pz-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  private selectedTask: ProjectTask;

  constructor(private projectListService: ProjectListService,  private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.loadTask(params['taskId']));
  }

  private loadTask(taskId: string) {
    this.selectedTask = this.projectListService.loadTask(taskId);
  }
}
