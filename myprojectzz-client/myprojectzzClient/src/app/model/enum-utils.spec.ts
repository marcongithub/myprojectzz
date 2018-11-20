import {enumKeys, enumNames} from './enum-utils';
import {TaskPriority} from './task-priority.enum';

describe('enum-utils ', () => {
  it('enumNames should return the names of an enum', function () {
    enumNames<TaskPriority>(TaskPriority).forEach(t => console.log(t));
  });

  it('enumKeys should return the keys of an enum', function () {
    enumKeys<TaskPriority>(TaskPriority).forEach(t => console.log(t));

    console.log('TaskPriority[0] ' + TaskPriority[0]);
    console.log('TaskPriority.HIGH ' + TaskPriority.HIGH);
    console.log(TaskPriority[0] === TaskPriority.HIGH);

    const aPriority: TaskPriority = 0;
    console.log('aPriority ' + aPriority);

  });

});
