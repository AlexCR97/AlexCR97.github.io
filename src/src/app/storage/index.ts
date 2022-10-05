export class Storage {
  private static readonly _keyPrefix = 'vx.portfolio';
  private static readonly _langKey = 'lang';

  static local = {
    lang: {
      get: () => localStorage.getItem(this.key(this._langKey)),
      set: (lang: string) =>
        localStorage.setItem(this.key(this._langKey), lang),
    },
  };

  private static key(key: string): string {
    return `${this._keyPrefix}.${key}`;
  }
}
