import {IProject, Project} from './project';
import {ProjectTask} from './project-task';
import {ProjectStatus, Status} from './project-status.enum';

describe('A Project', () => {
  const title = 'Any Project';
  let project: Project;
  beforeEach(() => {
    project = Project.fromObject({title: title});
  });


  it('should be initialized correctly from raw data', function () {
    const raw: IProject = {
      title: title
    };
    expect(project.description).toMatch('');
    expect(project.title).toMatch(title);
    expect(project.id).toMatch('-1');
  });

  it('should be mainly done', function () {
    project.addTask(ProjectTask.fromObject({status: Status.DONE}));
    project.addTask(ProjectTask.fromObject({status: Status.DONE}));
    project.addTask(ProjectTask.fromObject({status: Status.OPEN}));

    expect(ProjectStatus[project.getStatus()]).toMatch(ProjectStatus[ProjectStatus.MAINLY_DONE]);

  });

  it('should be mainly open', function () {
    project.addTask(ProjectTask.fromObject({status: Status.DONE}));
    project.addTask(ProjectTask.fromObject({status: Status.OPEN}));
    project.addTask(ProjectTask.fromObject({status: Status.OPEN}));

    expect(ProjectStatus[project.getStatus()]).toMatch(ProjectStatus[ProjectStatus.MAINLY_OPEN]);

  });

  it('without tasks should be open', function () {
    expect(ProjectStatus[project.getStatus()]).toMatch(ProjectStatus[ProjectStatus.OPEN]);
  });

  it('with only open tasks should be open', function () {
    project.addTask(ProjectTask.fromObject({status: Status.OPEN}));
    project.addTask(ProjectTask.fromObject({status: Status.OPEN}));
    project.addTask(ProjectTask.fromObject({status: Status.OPEN}));
    expect(ProjectStatus[project.getStatus()]).toMatch(ProjectStatus[ProjectStatus.OPEN]);
  });

  it('with only done tasks should be done', function () {
    project.addTask(ProjectTask.fromObject({status: Status.DONE}));
    project.addTask(ProjectTask.fromObject({status: Status.DONE}));
    project.addTask(ProjectTask.fromObject({status: Status.DONE}));
    expect(ProjectStatus[project.getStatus()]).toMatch(ProjectStatus[ProjectStatus.DONE]);
  });

});
