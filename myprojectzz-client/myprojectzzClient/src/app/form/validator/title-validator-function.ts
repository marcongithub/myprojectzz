import {AbstractControl} from '@angular/forms';

export function titleValidatorFunction(control: AbstractControl): { [key: string]: any } | null {
  return TitleValidator.validate(control.value);
}

export class TitleValidator {

  static validate(aValue: string): { [key: string]: any } | null {
    if (aValue === undefined || aValue === '') {
      return null;
    }
    const valid = /^[a-zA-Z]/.test(aValue);
    return valid ? null : {
      'invalidTitlePattern': {errorMessage: 'Eingegebener Wert darf nicht mit einer Zahl beginnen'},
      'valid': false,
      'value': aValue
    };
  }
}
