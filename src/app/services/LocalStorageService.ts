import { isLang, Lang } from 'app/models/lang';

export type LSKey = 'lang' | 'user';

function key(value: LSKey): string {
  return 'my-charts-web/' + value;
}

const LS_LANG = key('lang');
const LS_USER = key('user');

class LocalStorageService {

  private storage = localStorage;

  getLang(): Lang {
    const val = this.getValueByKey(LS_LANG);
    return isLang(val) ? val : 'ru';
  }

  setLang(lang: Lang | null): void {
    this.setValueByKey(LS_LANG, lang);
  }

  getUser(): string | null {
    return this.getValueByKey(LS_USER);
  }

  setUser(user: string | null): void {
    this.setValueByKey(LS_USER, user);
  }

  private getValueByKey(key: string): any {
    const val = this.storage.getItem(key);
    try {
      return val ? JSON.parse(val) : null;
    } catch (e) {
      return null;
    }
  }

  private setValueByKey(key: string, value: any): void {
    value == null
      ? this.storage.removeItem(key)
      : this.storage.setItem(key, JSON.stringify(value));
  }

}

export const localStorageService = new LocalStorageService();
