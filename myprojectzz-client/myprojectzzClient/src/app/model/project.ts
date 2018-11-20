import {ProjectStatus, Status} from './project-status.enum';
import {ProjectModul} from './project-modul';
import {ProjectTask} from './project-task';


export interface IProject {
  title?: string;
  id?: string;
  description?: string;
}

export class Project implements IProject {

  private readonly _tasks: ProjectTask[];
  private readonly _modules: ProjectModul[];

  constructor(private _title?: string, private _id?: string, private _description?: string) {
    this._tasks = [];
    this._modules = [];
    this._title = _title ? _title : '';
    this._id = _id ? _id : '-1';
    this._description = _description ? _description : '';
  }

  get modules(): ProjectModul[] {
    return this._modules;
  }

  get tasks(): ProjectTask[] {
    return this._tasks;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  static fromObject(projectRaw: IProject): Project {
    return new Project(projectRaw.title, projectRaw.id, projectRaw.description);
  }

  addTask(task: ProjectTask): void {
    this._tasks.push(task);
  }

  addAllTasks(tasks: ProjectTask[]): void {
    this._tasks.push(...tasks);
  }

  addModule(module: ProjectModul): void {
    this._modules.push(module);
  }

  addAllModules(modules: ProjectModul[]): void {
    this._modules.push(...modules);
  }

  getStatus(): ProjectStatus {
    return this._tasks.length === 0 ? ProjectStatus.OPEN : this.calculateStatus();
  }

  private calculateStatus(): ProjectStatus {
    const doneTasks: ProjectTask[] = this.tasks.filter(task => task.status === Status.DONE);
    if (doneTasks.length === 0) {
      return ProjectStatus.OPEN;
    } else if (doneTasks.length === this.tasks.length) {
      return ProjectStatus.DONE;
    } else if (doneTasks.length > (this.tasks.length / 2)) {
      return ProjectStatus.MAINLY_DONE;
    } else {
      return ProjectStatus.MAINLY_OPEN;
    }
  }


}
