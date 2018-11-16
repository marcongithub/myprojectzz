import {Component, OnInit} from '@angular/core';
import {ProjectListService} from '../service/core/project-list.service';
import {ProjectTask} from '../model/project-task';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../model/project';

@Component({
  selector: 'pz-edit-task-toolbar',
  templateUrl: './edit-task-toolbar.component.html',
  styleUrls: ['./edit-task-toolbar.component.css']
})
export class EditTaskToolbarComponent implements OnInit {

  private selectedTask: ProjectTask;
  private selectedProject: Project;
  private projectId: string;

  constructor(private projectListService: ProjectListService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.projectId = this.route.snapshot.params['projectId'];
  }

  back(): void {
    const url = `projects/(${this.projectId}//toolbar:${this.projectId})(navbar:tasknavbar)`;
    this.router.navigateByUrl(url);
  }

}
