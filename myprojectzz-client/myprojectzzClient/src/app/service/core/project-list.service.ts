import {EventEmitter, Injectable, Output} from '@angular/core';
import {Project} from '../../model/project';
import {WeekDay} from '@angular/common';
import {ProjectStatus} from '../../model/project-status.enum';
import {ProjectTask} from '../../model/project-task';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

  private projectRepository: Map<string, Project>;
  private projectSet: Set<Project>;

  @Output() projectSelectionEvent: EventEmitter<Project> = new EventEmitter();

  constructor() {
    const projects: Project[] = [];

    const renovierungsProject: Project = new Project('Renovierung', ProjectStatus.OPEN, '1');
    const todoListProject: Project = new Project('Todo Liste', ProjectStatus.OPEN, '2');
    const umzugsProject: Project = new Project('Umzug', ProjectStatus.DONE, '3');

    const entenTask = new ProjectTask('Mama wg. Ente anrufen', WeekDay.Friday, 44);
    const dirrTask = new ProjectTask('Dirr anrufen', WeekDay.Friday, 44);

    todoListProject.tasks = [];
    todoListProject.tasks.push(new ProjectTask('Mama wg. Ente anrufen', WeekDay.Friday, 44));
    todoListProject.tasks.push(new ProjectTask('Dirr anrufen', WeekDay.Friday, 44));

    // set up repos
    this.projectSet = new Set<Project>();
    this.projectSet.add(renovierungsProject).add(todoListProject).add(umzugsProject);
    this.projectRepository = new Map<string, Project>();
    this.projectRepository.set(renovierungsProject.id, renovierungsProject);
    this.projectRepository.set(todoListProject.id, todoListProject).set(umzugsProject.id, umzugsProject);

  }

  loadProjects(): Project[] {
    return Array.from(this.projectSet);
  }

  loadProject(projectId: number): Project {
    return this.projectRepository.get(projectId.toString());
  }


}
