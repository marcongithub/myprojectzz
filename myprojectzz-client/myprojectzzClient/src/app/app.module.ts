import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CurrentTaskListComponent } from './current-task-list/current-task-list.component';
import { ProjectsMainComponent } from './projects-main/projects-main.component';
import { ProjectToolsBarComponent } from './project-tools-bar/project-tools-bar.component';
import { TaskToolsBarComponent } from './task-tools-bar/task-tools-bar.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { EditProjectToolbarComponent } from './edit-project-toolbar/edit-project-toolbar.component';
import { EditTaskToolbarComponent } from './edit-task-toolbar/edit-task-toolbar.component';
import { ProjectNavbarComponent } from './project-navbar/project-navbar.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { TaskNavbarComponent } from './task-navbar/task-navbar.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    TaskListComponent,
    CurrentTaskListComponent,
    ProjectsMainComponent,
    ProjectToolsBarComponent,
    TaskToolsBarComponent,
    EditProjectComponent,
    EditTaskComponent,
    EditProjectToolbarComponent,
    EditTaskToolbarComponent,
    ProjectNavbarComponent,
    HomeNavbarComponent,
    TaskNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
