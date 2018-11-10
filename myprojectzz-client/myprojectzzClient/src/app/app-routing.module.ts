import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CurrentTaskListComponent} from './current-task-list/current-task-list.component';
import {ProjectsMainComponent} from './projects-main/projects-main.component';
import {ProjectToolsBarComponent} from './project-tools-bar/project-tools-bar.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {TaskToolsBarComponent} from './task-tools-bar/task-tools-bar.component';
import {TaskListComponent} from './task-list/task-list.component';
import {EditProjectToolbarComponent} from './edit-project-toolbar/edit-project-toolbar.component';
import {EditProjectComponent} from './edit-project/edit-project.component';
import {EditTaskToolbarComponent} from './edit-task-toolbar/edit-task-toolbar.component';
import {EditTaskComponent} from './edit-task/edit-task.component';
import {HomeNavbarComponent} from './home-navbar/home-navbar.component';
import {ProjectNavbarComponent} from './project-navbar/project-navbar.component';
import {TaskNavbarComponent} from './task-navbar/task-navbar.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/home(navbar:home)',
  pathMatch: 'full'
},

  {
    path: 'home',
    component: CurrentTaskListComponent,
  },
  {
    path: 'home',
    component: HomeNavbarComponent,
    outlet: 'navbar'
  },
  {
    path: 'projectsnavbar',
    component: ProjectNavbarComponent,
    outlet: 'navbar'
  },
  {
    path: 'tasknavbar',
    component: TaskNavbarComponent,
    outlet: 'navbar'
  },
  {
    path: 'projects',
    component: ProjectsMainComponent,
    children: [
      // project list panel
      {
        path: '',
        component: ProjectToolsBarComponent,
        outlet: 'toolbar',
      },
      {
        path: '',
        component: ProjectListComponent
      },
      // task list panel
      {
        path: ':projectId',
        component: TaskToolsBarComponent,
        outlet: 'toolbar',
      },
      {
        path: ':projectId',
        component: TaskListComponent
      },
      // edit project panel
      {
        path: 'edit/:projectId',
        component: EditProjectToolbarComponent,
        outlet: 'toolbar',
      },
      {
        path: 'edit/:projectId',
        component: EditProjectComponent
      },
      // edit task panel
      {
        path: ':projectId/edit/:taskId',
        component: EditTaskToolbarComponent,
        outlet: 'toolbar',
      },
      {
        path: ':projectId/edit/:taskId',
        component: EditTaskComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
