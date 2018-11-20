import {EventEmitter, Injectable, Output} from '@angular/core';
import {Project} from '../../model/project';
import {WeekDay} from '@angular/common';
import {Status} from '../../model/project-status.enum';
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

    const renovierungsProject: Project = new Project('Renovierung', '1');
    const todoListProject: Project = new Project('Todo Liste', '2');
    const umzugsProject: Project = new Project('Umzug', '3');

    const entenTask = new ProjectTask('Mama wg. Ente anrufen', WeekDay.Friday, 44, todoListProject, '1');
    const dirrTask = new ProjectTask('Dirr anrufen', WeekDay.Friday, 44, todoListProject, '2');


    todoListProject.addTask(entenTask);
    todoListProject.addTask(dirrTask);

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

  // TODO: add caching https://fullstack-developer.academy/caching-http-requests-with-angular/
  loadProject(projectId: string): Project {
    return this.projectRepository.get(projectId.toString());
  }

  loadTask(taskId: string): ProjectTask {
    return this.taskRepository.get(taskId);
  }

  saveTask(task: ProjectTask): ProjectTask {
    let taskToReturn: ProjectTask;
    if (Number(task.id) < 0) {
      // CREATE, i.e generate taskid
      console.log('saving new task');
      task.id = this.generateId();
      this.taskRepository.set(task.id, task);
      taskToReturn = task;
      // add task to project
      task.project.tasks.push(task);
    } else {
      // UPDATE
      console.log('updating existing task');
      const taskToUpdate: ProjectTask = this.taskRepository.get(task.id);
      taskToUpdate.description = task.description;
      taskToUpdate.title = task.title;
      taskToUpdate.priority = task.priority;
      taskToReturn = taskToUpdate;
    }

    return task;
  }

  saveProject(project: Project): Project {
    let projectToReturn: Project;
    if (Number(project.id) < 0) {
      // CREATE new project
      console.log('saving new project');
      project.id = this.generateId();
      this.projectRepository.set(project.id, project);
      this.projectSet.add(project);
    } else {
      // UPDATE
      console.log('updating existing project');
      projectToReturn = this.projectRepository.get(project.id);
      projectToReturn.title = project.title;
      projectToReturn.description = project.description;
    }
    return projectToReturn;
  }

  private generateId(): string {
    let max = 0;

    function findMax(entity: { id }) {
      const id: number = Number(entity.id);
      if (id > max) {
        max = id;
      }
    }

    this.taskRepository.forEach(task => findMax(task));
    return String(max++);
  }

}
