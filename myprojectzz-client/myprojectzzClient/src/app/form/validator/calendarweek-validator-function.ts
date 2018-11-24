import {AbstractControl} from '@angular/forms';
import {getWeekNumber} from '../../model/date-utils';

export function calendarweekValidatorFunction(control: AbstractControl): { [key: string]: any } | null {
  if (control.value === null || control.value === '') {
    return null;
  }
  const currentWeek = getWeekNumber(new Date());
  const selectedWeek: number = control.value;
  if (currentWeek > selectedWeek) {
    return {
      'invalidCalendarWeek': {errorMessage: 'Week must not be in the past'},
      'valid': false
    };
  }

  return null;
}
