import {Component, OnInit} from '@angular/core';
import {Project} from '../model/project';
import {ProjectListService} from '../service/core/project-list.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'pz-project-tools-bar',
  templateUrl: './project-tools-bar.component.html',
  styleUrls: ['./project-tools-bar.component.css']
})
export class ProjectToolsBarComponent implements OnInit {

  private selectedProject: Project;

  constructor(private projectListService: ProjectListService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.projectListService.projectSelectionEvent.subscribe(project => {
      this.selectedProject = project;
    });
  }

  isOpenProjectEnabled(): boolean {
    return this.selectedProject !== undefined && this.selectedProject.tasks !== undefined && this.selectedProject.tasks.length > 0;
  }

  isEditProjectEnabled(): boolean {
    return this.selectedProject !== undefined;
  }

  openProject(): void {
    // e.g.: 'projects/(primary:2//toolbar:2)(navbar:tasknavbar)' entspricht projects/2(navbar:tasknavbar)
    // working
    this.router.navigateByUrl(`projects/(primary:${this.selectedProject.id}//toolbar:${this.selectedProject.id})(navbar:tasknavbar)`);


  }

  editProject(): void {
    // working
    this.router.navigate([{outlets: {primary: `edit/${this.selectedProject.id}`, toolbar: `edit/${this.selectedProject.id}`}}],
      {relativeTo: this.route});

  }

}
