import {WeekDay} from '@angular/common';
import {Project} from './project';

export interface IProjectTask {
  description?: string;
  id?: string;
  project?: Project;
  title?: String;
  weekday?: WeekDay;
  calendarWeek?: number;
}

export class ProjectTask implements IProjectTask {

  constructor(private _title: String, private _weekday: WeekDay,
              private _calendarWeek: number, private _project: Project, private _id: string, private _description?: string) {
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
    return new ProjectTask(taskRaw.title ? taskRaw.title : '',
      taskRaw.weekday ? taskRaw.weekday : WeekDay.Monday,
      taskRaw.calendarWeek ? taskRaw.calendarWeek : 0,
      taskRaw.project, taskRaw.id ? taskRaw.id : '-1',
      taskRaw.description ? taskRaw.description : '');
  }

  static create(project: Project): ProjectTask {
    const projectTaskTemplate: IProjectTask = {
      project: project
    };
    return ProjectTask.fromObject(projectTaskTemplate);
  }
}
