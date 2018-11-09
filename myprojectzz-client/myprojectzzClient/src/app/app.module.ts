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

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    TaskListComponent,
    CurrentTaskListComponent,
    ProjectsMainComponent,
    ProjectToolsBarComponent,
    TaskToolsBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
