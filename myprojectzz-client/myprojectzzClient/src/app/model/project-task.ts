import {WeekDay} from '@angular/common';
import {Project} from './project';

export class ProjectTask {

  private _description: string;

  constructor(private _title: String, private _weekday: WeekDay,
              private _calendarWeek: number, private _project: Project, private _id: string) {
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
}
