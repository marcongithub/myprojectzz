import {enumKeys, enumNames} from './enum-utils';
import {TaskPriority} from './task-priority.enum';
import {WeekDay} from '@angular/common';

describe('enum-utils ', () => {
  it('enumNames should return the names of an enum', function () {
    enumNames<WeekDay>(WeekDay).forEach(t => console.log(t));
  });

  it('enumKeys should return the keys of an enum', function () {
    enumKeys<WeekDay>(WeekDay).forEach(t => console.log(t));
  });

});
