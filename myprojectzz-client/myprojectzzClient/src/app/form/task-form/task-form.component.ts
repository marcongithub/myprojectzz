import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IProjectTask, ProjectTask} from '../../model/project-task';
import {titleValidatorFunction} from '../validator/title-validator-function';
import {ProjectListService} from '../../service/core/project-list.service';
import {TaskPriority} from '../../model/task-priority.enum';
import {enumKeys, enumNames} from '../../model/enum-utils';
import {getWeekNumber, toDateFromIsoDate, toISOdate} from '../../model/date-utils';
import {WeekDay} from '@angular/common';
import {calendarweekValidatorFunction} from '../validator/calendarweek-validator-function';
import {taskdateValidatorFunction} from '../validator/taskdate-validator-function';

@Component({
  selector: 'pz-task-form-component',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Input()
  task: ProjectTask;

  taskForm: FormGroup;

  priorityKeys: number[];

  priorityLabels: string[];

  weekdayNames: string[];

  weekdayNumbers: number[];

  constructor(private formBuilder: FormBuilder, private projectListService: ProjectListService) {
    this.priorityKeys = enumKeys<TaskPriority>(TaskPriority);
    this.priorityLabels = enumNames<TaskPriority>(TaskPriority);
    this.weekdayNames = enumNames<WeekDay>(WeekDay);
    this.weekdayNumbers = enumKeys<WeekDay>(WeekDay);
  }

  get taskName() {
    return this.taskForm.get('title');
  }

  get calendarWeek() {
    return this.taskForm.get('calendarWeek');
  }

  get date() {
    return this.taskForm.get('date');
  }

  get weekDay() {
    return this.taskForm.get('weekday');
  }

  ngOnInit() {
    this.taskForm = this.createFormGroupWithBuilder();
  }

  createFormGroupWithBuilder(): FormGroup {
    return this.formBuilder.group({
      title: [this.task.title, [Validators.required, titleValidatorFunction, Validators.minLength(3), Validators.maxLength(30)]],
      description: [this.task.description],
      // alternativ FormControl
      priority: new FormControl(this.task.priority, [Validators.required]),
      date: [toISOdate(this.task.date)],
      // date: [this.getDateForInput(this.task.date)],
      calendarWeek: [this.task.calendarWeek, [Validators.min(1), Validators.max(52)]],
      weekday: this.task.weekday
    });
  }

  saveTask(): void {
    const taskRaw: IProjectTask = this.taskForm.value;
    // convert date if provided
    taskRaw.date = toDateFromIsoDate(this.taskForm.value.date);
    // keep values that should not be changed
    taskRaw.id = this.task.id;
    taskRaw.project = this.task.project;
    const projectTask = ProjectTask.fromObject(taskRaw);

    this.task = this.projectListService.saveTask(projectTask);
  }

  calendarWeekChanged(event: any) {
    // validate only if no other validation error
    if (!this.calendarWeek.invalid) {
      this.calendarWeek.setErrors(calendarweekValidatorFunction(this.calendarWeek));
      // if valid, reset date and day
      if (!this.calendarWeek.invalid) {
        this.weekDay.setValue('');
        this.date.setValue('');
      }
    }
  }

  dateChanged(event: any) {
    console.log('date changed! ' + event.target.value);
    this.date.setErrors(taskdateValidatorFunction(this.date));
    if (!this.date.invalid) {
      const newDate: Date = toDateFromIsoDate(this.date.value);
      this.calendarWeek.setValue(getWeekNumber(newDate));
      this.weekDay.setValue(newDate.getDay());
    }
  }

  weekdayChanged() {
  }

}
