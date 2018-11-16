import {Component, OnInit} from '@angular/core';
import {ProjectListService} from '../service/core/project-list.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../model/project';

@Component({
  selector: 'pz-edit-project-toolbar',
  templateUrl: './edit-project-toolbar.component.html',
  styleUrls: ['./edit-project-toolbar.component.css']
})
export class EditProjectToolbarComponent implements OnInit {

  private selectedProject: Project;

  constructor(private projectListService: ProjectListService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.loadProject(params['projectId']));
    console.log(`Editing ${this.selectedProject.title} ...`);
  }

  private loadProject(param: string) {
    console.log('loading project: ' + param);
    this.selectedProject = this.projectListService.loadProject(param);
  }

}
