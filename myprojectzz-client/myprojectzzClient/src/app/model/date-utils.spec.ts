import {WeekDay} from '@angular/common';

describe('date-utils ', () => {
  it('weekday should return weekday from given date', function () {
    const date: Date = new Date(2018, 10, 22);
    console.log(date.toDateString());
    console.log(date.getDay());

    expect(date.getDay()).toBe(WeekDay.Thursday);

  });


});
