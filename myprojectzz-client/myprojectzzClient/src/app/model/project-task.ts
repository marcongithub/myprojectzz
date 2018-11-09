import {WeekDay} from '@angular/common';

export class ProjectTask {

  constructor(private _title: String, private _weekday: WeekDay, private _calendarWeek: number) {
  }


  get title(): String {
    return this._title;
  }

  set title(value: String) {
    this._title = value;
  }

  get weekday(): WeekDay {
    return this._weekday;
  }

  set weekday(value: WeekDay) {
    this._weekday = value;
  }

  get calendarWeek(): number {
    return this._calendarWeek;
  }

  set calendarWeek(value: number) {
    this._calendarWeek = value;
  }
}
