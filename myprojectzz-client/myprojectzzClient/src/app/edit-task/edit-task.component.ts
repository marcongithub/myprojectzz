import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProjectListService} from '../service/core/project-list.service';
import {ProjectTask} from '../model/project-task';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'pz-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit, OnDestroy {

  private selectedTask: ProjectTask;

  errorMessages: Map<string, string> = new Map<string, string>();

  @ViewChild('editTaskForm')
  taskForm: NgForm;

  private formValidationObserver: Subscription;
  private parameterObserver: Subscription;

  constructor(private projectListService: ProjectListService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.parameterObserver = this.route.params.subscribe(params => this.loadTask(params['taskId']));
    this.formValidationObserver = this.taskForm.statusChanges.subscribe(() => this.handleErrors());
  }

  ngOnDestroy(): void {
    this.formValidationObserver.unsubscribe();
    this.parameterObserver.unsubscribe();
  }

  private handleErrors(): void {
    this.errorMessages = new Map<string, string>();
    if (this.taskForm.form.get('title').invalid) {
      this.errorMessages.set('title', 'Please provide a valid value for the task name');
    }

    // else {
    //   this.errorMessages.set('title', undefined);
    // }
  }

  private loadTask(taskId: string) {
    this.selectedTask = this.projectListService.loadTask(taskId);
  }

  saveTask() {
    console.table(this.selectedTask);
  }
}
