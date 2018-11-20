import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IProjectTask, ProjectTask} from '../../model/project-task';
import {titleValidatorFunction} from '../validator/title-validator-function';
import {ProjectListService} from '../../service/core/project-list.service';
import {TaskPriority} from '../../model/task-priority.enum';
import {enumKeys, enumNames} from '../../model/enum-utils';

@Component({
  selector: 'pz-task-form-component',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Input()
  task: ProjectTask;

  taskForm: FormGroup;

  taskPriorities = TaskPriority;

  priorityKeys: number[];

  priorityLabels: string[];

  constructor(private formBuilder: FormBuilder, private projectListService: ProjectListService) {
    this.priorityKeys = enumKeys<TaskPriority>(TaskPriority);
    this.priorityLabels = enumNames<TaskPriority>(TaskPriority);
  }

  get taskName() {
    return this.taskForm.get('title');
  }

  ngOnInit() {
    this.taskForm = this.createFormGroupWithBuilder();
  }

  createFormGroupWithBuilder(): FormGroup {
    return this.formBuilder.group({
      title: [this.task.title, [Validators.required, titleValidatorFunction, Validators.minLength(3), Validators.maxLength(30)]],
      description: [this.task.description],
      // alternativ FormControl
      priority: new FormControl(this.task.priority, [Validators.required])
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

}
