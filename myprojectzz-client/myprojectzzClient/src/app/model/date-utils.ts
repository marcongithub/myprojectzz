export function toISOdate(date: Date): string {
  if (date === undefined) {
    return '';
  }
  return new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
    .toISOString()
    .split('T')[0];
}

export function toDateFromIsoDate(isoDate: string): Date {
  if (isoDate === undefined || isoDate === null || isoDate.trim() === '') {
    return undefined;
  }
  const dateSplit: number[] = isoDate.split('-').map(s => Number(s));
  return new Date(dateSplit[0], (dateSplit[1] - 1), dateSplit[2]);
}

export function getWeekNumber(d: Date) {
  // Create a copy of this date object
  const target: any = new Date(d.valueOf());

  // ISO week date weeks start on mond
  // so correct the day number
  const dayNr = (d.getDay() + 6) % 7;

  // Set the target to the thursday of this week so th
  // target date is in the right year
  target.setDate(target.getDate() - dayNr + 3);

  // ISO 8601 states that week 1 is the wee
  // with january 4th in it
  const jan4: any = new Date(target.getFullYear(), 0, 4);

  // Number of days between target date and january 4th
  const dayDiff = (target - jan4) / 86400000;

  // Calculate week number: Week 1 (january 4th) plus the
  // number of weeks between target date and january 4th
  const weekNr = 1 + Math.ceil(dayDiff / 7);

  return weekNr;
}
