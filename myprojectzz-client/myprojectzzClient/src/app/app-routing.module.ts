import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CurrentTaskListComponent} from './current-task-list/current-task-list.component';
import {ProjectsMainComponent} from './projects-main/projects-main.component';
import {ProjectToolsBarComponent} from './project-tools-bar/project-tools-bar.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {TaskToolsBarComponent} from './task-tools-bar/task-tools-bar.component';
import {TaskListComponent} from './task-list/task-list.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
  {
    path: 'home',
    component: CurrentTaskListComponent
  },
  {
    path: 'projects',
    component: ProjectsMainComponent,
    children: [
      {
        path: '',
        component: ProjectToolsBarComponent,
        outlet: 'toolbar',
      },
      {
        path: '',
        component: ProjectListComponent
      },
      {
        path: ':projectId',
        component: TaskToolsBarComponent,
        outlet: 'toolbar',
      },
      {
        path: ':projectId',
        component: TaskListComponent
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
