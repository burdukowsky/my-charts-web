// Ключи для localStorage

function key(value: string): string {
  return 'namespace/' + value;
}

export const LS_USER = key('user');
