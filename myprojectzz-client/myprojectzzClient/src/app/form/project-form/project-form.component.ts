import {Component, Input, OnInit} from '@angular/core';
import {IProject, Project} from '../../model/project';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjectListService} from '../../service/core/project-list.service';
import {titleValidatorFunction} from '../validator/title-validator-function';

@Component({
  selector: 'pz-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  projectForm: FormGroup;

  @Input()
  project: Project;

  constructor(private formBuilder: FormBuilder, private projectListService: ProjectListService) {
  }

  get projectName(): AbstractControl {
    const control: AbstractControl = this.projectForm.get('title');
    return this.projectForm.get('title');
  }

  ngOnInit() {
    this.projectForm = this.createFormGroup();
  }

  saveProject(): void {
    console.log(this.projectForm.value);
    const projectRaw: IProject = this.projectForm.value;
    const project: Project = Project.fromObject(projectRaw);
    project.id = this.project.id;
    this.projectListService.saveProject(project);
  }

  private createFormGroup() {
    return this.formBuilder.group({
      title: [this.project.title, [Validators.required, titleValidatorFunction, Validators.minLength(3), Validators.maxLength(30)]],
      description: [this.project.description]
    });
  }

}
