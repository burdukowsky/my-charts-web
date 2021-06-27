import { isLang, Lang } from 'app/models/Lang';
import { createMainState, MainState } from '../models/MainState';

type LSKey = 'lang' | 'user' | 'mainState';

function key(value: LSKey): string {
  return 'my-charts-web/' + value;
}

function userKey(key: string, user: string): string {
  return `${key}/${user}`;
}

const LS_LANG = key('lang');
const LS_USER = key('user');
const LS_MAIN_STATE = key('mainState');

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

  getMainState(): MainState | null {
    const user = this.getUser();
    if (user == null) {
      return null;
    }
    return this.getMainStateByUser(user);
  }

  getMainStateByUser(user: string): MainState {
    const val = this.getValueByKey(userKey(LS_MAIN_STATE, user));
    return val ? val : createMainState();
  }

  setMainState(val: MainState | null): void {
    const user = this.getUser();
    if (user == null) {
      console.warn('"setMainState()" вызван без авторизованного юзера.');
      return;
    }
    this.setValueByKey(userKey(LS_MAIN_STATE, user), val);
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
