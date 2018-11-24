import {AbstractControl} from '@angular/forms';
import {toDateFromIsoDate} from '../../model/date-utils';

export function taskdateValidatorFunction(control: AbstractControl): { [key: string]: any } | null {
  const date: Date = toDateFromIsoDate(control.value);
  if (date !== null && date.getTime() < Date.now()) {
    return {
      'invalidDate': {errorMessage: 'Date must not be in the past'},
      'valid': false
    };
  }

  return null;
}
