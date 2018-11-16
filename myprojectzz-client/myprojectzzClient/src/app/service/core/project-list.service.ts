import {EventEmitter, Injectable, Output} from '@angular/core';
import {Project} from '../../model/project';
import {WeekDay} from '@angular/common';
import {ProjectStatus} from '../../model/project-status.enum';
import {ProjectTask} from '../../model/project-task';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {


  @Output() projectSelectionEvent: EventEmitter<Project> = new EventEmitter();
  @Output() taskSelectionEvent: EventEmitter<ProjectTask> = new EventEmitter();
  // stub data
  private projectRepository: Map<string, Project>;
  // stub data end
  private readonly projectSet: Set<Project>;
  private taskRepository: Map<string, ProjectTask>;

  constructor() {

    console.log('In constructor of ProjectListService ...');

    const projects: Project[] = [];

    const renovierungsProject: Project = new Project('Renovierung', ProjectStatus.OPEN, '1');
    const todoListProject: Project = new Project('Todo Liste', ProjectStatus.OPEN, '2');
    const umzugsProject: Project = new Project('Umzug', ProjectStatus.DONE, '3');

    const entenTask = new ProjectTask('Mama wg. Ente anrufen', WeekDay.Friday, 44, todoListProject, '1');
    const dirrTask = new ProjectTask('Dirr anrufen', WeekDay.Friday, 44, todoListProject, '2');


    todoListProject.tasks = [];
    todoListProject.tasks.push(entenTask);
    todoListProject.tasks.push(dirrTask);

    // set up repos
    this.taskRepository = new Map<string, ProjectTask>();
    this.taskRepository.set('1', entenTask);
    this.taskRepository.set('2', dirrTask);
    this.projectSet = new Set<Project>();
    this.projectSet.add(renovierungsProject).add(todoListProject).add(umzugsProject);
    this.projectRepository = new Map<string, Project>();
    this.projectRepository.set(renovierungsProject.id, renovierungsProject);
    this.projectRepository.set(todoListProject.id, todoListProject).set(umzugsProject.id, umzugsProject);

  }

  loadProjects(): Project[] {
    return Array.from(this.projectSet);
  }

  loadProject(projectId: string): Project {
    return this.projectRepository.get(projectId.toString());
  }

  loadTask(taskId: string): ProjectTask {
    return this.taskRepository.get(taskId);
  }

  saveTask(task: ProjectTask): ProjectTask {
    let taskToReturn: ProjectTask;
    if (Number(task.id) < 0) {
      // create, i.e generate taskid
      console.log('saving new task');
      const id: string = this.generateTaskId();
      task.id = id;
      this.taskRepository.set(task.id, task);
      taskToReturn = task;
      // add task to project
      task.project.tasks.push(task);
    } else {
      // update
      console.log('updating existing task');
      const taskToUpdate: ProjectTask = this.taskRepository.get(task.id);
      taskToUpdate.description = task.description;
      taskToUpdate.title = task.title;
      taskToReturn = taskToUpdate;
    }

    return task;
  }

  private generateTaskId(): string {
    let max = 0;

    function findMax(task: ProjectTask) {
      const id: number = Number(task.id);
      if (id > max) {
        max = id;
      }
    }

    this.taskRepository.forEach(task => findMax(task));
    return String(max++);
  }

}
