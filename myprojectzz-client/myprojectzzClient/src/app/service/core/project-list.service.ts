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

  loadProjects(): Project[] {
    const projects: Project[] = [];
    projects.push(new Project('Renovierung', ProjectStatus.OPEN, '1'));

    const projectTodoList: Project = new Project('Todo Liste', ProjectStatus.OPEN, '2');

    // const tasksOfTodoList: ProjectTask[] = [];
    projectTodoList.tasks = [];
    projectTodoList.tasks.push(new ProjectTask('Mama wg. Ente anrufen', WeekDay.Friday, 44));
    projects.push(projectTodoList);
    projects.push(new Project('Umzug', ProjectStatus.DONE, '3'));
    return projects;
  }

  loadProject(projectId: number): Project {
    const projectTodoList: Project = new Project('Todo Liste', ProjectStatus.OPEN, '2');
    projectTodoList.tasks = [];
    projectTodoList.tasks.push(new ProjectTask('Mama wg. Ente anrufen', WeekDay.Friday, 44));
    projectTodoList.tasks.push(new ProjectTask('Dirr anrufen', WeekDay.Friday, 44));
    return projectTodoList;
  }


}
