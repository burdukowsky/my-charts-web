import { DateTime } from 'luxon';

export const dateFormat = 'yyyy-MM-dd';

export function formatMillis(millis: number): string {
  return DateTime.fromMillis(millis).toFormat(dateFormat);
}

export function toMillis(formatted: string): number {
  return DateTime.fromFormat(formatted, dateFormat).toMillis();
}

export function genRandomId(): string {
  return (Math.random() + 1).toString(36).substring(2, 15);
}
