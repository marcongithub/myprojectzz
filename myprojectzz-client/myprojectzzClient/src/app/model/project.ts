import {ProjectStatus} from './project-status.enum';
import {ProjectModul} from './project-modul';
import {ProjectTask} from './project-task';


export class Project {

  constructor(private _title: string, private _status: ProjectStatus, private _id?: string) {
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get modules(): ProjectModul[] {
    return this._modules;
  }

  set modules(value: ProjectModul[]) {
    this._modules = value;
  }

  get tasks(): ProjectTask[] {
    return this._tasks;
  }

  set tasks(value: ProjectTask[]) {
    this._tasks = value;
  }

  private _modules: ProjectModul[];

  private _tasks: ProjectTask[];

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get status(): ProjectStatus {
    return this._status;
  }

  set status(value: ProjectStatus) {
    this._status = value;
  }
}
