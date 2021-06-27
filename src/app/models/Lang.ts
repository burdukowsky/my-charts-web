export type Lang = 'ru' | 'en';

export function isLang(val: any): val is Lang {
  return val === 'ru' || val === 'en';
}
