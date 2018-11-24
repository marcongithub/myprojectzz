import {TaskPriority} from './task-priority.enum';

export function enumNames<E>(anyEnum: any): string[] {
  // return Object.keys(anyEnum).map(key => anyEnum[key]).filter(value => typeof value === 'string') as string[];
  return Object.keys(anyEnum).map(key => anyEnum[key]).filter(value => isNaN(value)) as string[];
}

export function enumKeys<E>(anyEnum: any): number[] {
  return Object.keys(anyEnum).map(t => Number(t)).filter(t => !isNaN(t)) as number[];
}

