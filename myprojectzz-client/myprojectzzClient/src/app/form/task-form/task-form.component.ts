import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IProjectTask, ProjectTask} from '../../model/project-task';
import {taskTitleValidator} from '../validator/task-title-validator';
import {ProjectListService} from '../../service/core/project-list.service';

@Component({
  selector: 'pz-task-form-component',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Input()
  task: ProjectTask;

  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private projectListService: ProjectListService) {
  }

  ngOnInit() {
    this.taskForm = this.createFormGroupWithBuilder();
  }

  createFormGroupWithBuilder(): FormGroup {
    return this.formBuilder.group({
      title: [this.task.title, [Validators.required, taskTitleValidator, Validators.minLength(3), Validators.maxLength(30)]],
      description: [this.task.description]
    });
  }

  saveTask(): void {
    const taskRaw: IProjectTask = this.taskForm.value;
    // keep values that should not be changed
    taskRaw.id = this.task.id;
    taskRaw.project = this.task.project;

    const projectTask = ProjectTask.fromObject(taskRaw);

    this.task = this.projectListService.saveTask(projectTask);
  }

  get taskName() {
    return this.taskForm.get('title');
  }

  get description() {
    return this.taskForm.get('description');
  }

}
