import {WeekDay} from '@angular/common';
import {Project} from './project';
import {Status} from './project-status.enum';
import {TaskPriority} from './task-priority.enum';

export interface IProjectTask {
  description?: string;
  id?: string;
  project?: Project;
  title?: String;
  weekday?: WeekDay;
  calendarWeek?: number;
  status?: Status;
  priority?: TaskPriority;
  date?: Date;
}

export class ProjectTask implements IProjectTask {
  constructor(private _title?: String, private _weekday?: WeekDay,
              private _calendarWeek?: number, private _project?: Project,
              private _id?: string, private _description?: string,
              private _status?: Status, private _priority?: TaskPriority,
              private _date?: Date) {
    this._title = _title ? _title : '';
    this._weekday = _weekday ? _weekday : WeekDay.Monday;
    this._calendarWeek = _calendarWeek ? _calendarWeek : 0;
    this._project = _project;
    this._id = _id ? _id : '-1';
    this._description = _description ? _description : '';
    this._status = _status ? _status : Status.OPEN;
    this._priority = _priority ? _priority : TaskPriority.DEFAULT;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get status(): Status {
    return this._status;
  }

  set status(value: Status) {
    if (value !== null && value !== undefined) {
      this._status = value;
    }
  }

  get priority(): TaskPriority {
    return this._priority;
  }

  set priority(value: TaskPriority) {
    this._priority = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get project(): Project {
    return this._project;
  }

  set project(value: Project) {
    this._project = value;
  }

  get title(): String {
    return this._title;
  }

  set title(value: String) {
    this._title = value;
  }

  get weekday(): WeekDay {
    return this._weekday;
  }

  set weekday(value: WeekDay) {
    this._weekday = value;
  }

  get calendarWeek(): number {
    return this._calendarWeek;
  }

  set calendarWeek(value: number) {
    this._calendarWeek = value;
  }

  static fromObject(taskRaw: IProjectTask): ProjectTask {
    return new ProjectTask(taskRaw.title,
      taskRaw.weekday,
      taskRaw.calendarWeek,
      taskRaw.project,
      taskRaw.id,
      taskRaw.description,
      taskRaw.status,
      taskRaw.priority,
      taskRaw.date);
  }

}
