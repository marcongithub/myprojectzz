import {AbstractControl} from '@angular/forms';

export function taskTitleValidator(control: AbstractControl): { [key: string]: any } | null {
  const valid = /^[a-zA-Z]/.test(control.value);
  return valid ? null : { invalidTaskNamePattern: { valid: false, value: control.value } };
}
