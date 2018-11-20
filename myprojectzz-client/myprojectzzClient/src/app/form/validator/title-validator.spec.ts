import {TitleValidator} from './title-validator-function';

describe('title validation', () => {
  it('should return null for valid title -A valid title-', function () {
    const title = 'A valid title';
    expect(TitleValidator.validate(title)).toBeNull();
  });

  it('should return null for valid title -A1-', function () {
    const title = 'A1';
    expect(TitleValidator.validate(title)).toBeNull();
  });

  it('should returninvalidTaskNamePattern for title -1 an invalid title-', function () {
    const title = '1 an invalid title';
    const ret: any = TitleValidator.validate(title);
    expect(ret.valid).toBe(false);
    expect(ret.value).toMatch(title);
  });

  it('should returninvalidTaskNamePattern for title -1-', function () {
    const title = '1';
    const ret: any = TitleValidator.validate(title);
    expect(ret.valid).toBe(false);
    expect(ret.value).toMatch(title);
  });

  it('should returninvalidTaskNamePattern for title -1xx-', function () {
    const title = '1xx';
    const ret: any = TitleValidator.validate(title);
    expect(ret.valid).toBe(false);
    expect(ret.value).toMatch(title);
  });

  it('should display error message for title -1xx-', function () {
    const title = '1xx';
    const ret: any = TitleValidator.validate(title);
    expect(ret.valid).toBe(false);
    expect(ret.value).toMatch(title);
    expect(ret.invalidTitlePattern.errorMessage).toMatch('Eingegebener Wert darf nicht mit einer Zahl beginnen');
  });

  it('should return valid for empty string', function () {
    const title = '';
    const ret: any = TitleValidator.validate(title);
    expect(ret).toBeNull();
  });

});
