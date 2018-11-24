import {IProjectTask, ProjectTask} from './project-task';
import {WeekDay} from '@angular/common';
import {Project} from './project';
import {Status} from './project-status.enum';
import {TaskPriority} from './task-priority.enum';

describe('A ProjectTask', () => {
  const title = 'Any Task';
  const weekday: WeekDay = WeekDay.Monday;
  const calendarWeek = 2;
  const project: Project = null;
  const id = '1';
  let task: ProjectTask;
  beforeEach(() => {
    task = new ProjectTask(title, weekday, calendarWeek, project, id);
  });

  it('should map weekdays as expected', function () {
    expect(WeekDay[task.weekday]).toBe('Monday', 'Wrong mapping of weekdays');
  });

  it('should be initialized correctly from raw data', function () {
    const raw: IProjectTask = {
      title : title
    };
    task = ProjectTask.fromObject(raw);
    expect(task.title).toMatch(title);
    expect(task.weekday).toBe(WeekDay.Monday);
    expect(task.calendarWeek).toBe(0);
    expect(task.project).toBeUndefined();
    expect(task.id).toMatch('-1');
    expect(task.description).toMatch('');
    expect(task.status).toBe(Status.OPEN);
    expect(task.priority).toBe(TaskPriority.DEFAULT);
    expect(task.date).toBeUndefined();
  });

});
