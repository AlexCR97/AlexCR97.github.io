export class Storage {
  private static readonly _keyPrefix = 'vx.portfolio';
  private static readonly _langKey = 'lang';
  private static readonly _themeKey = 'theme';

  static local = {
    lang: {
      get: () => localStorage.getItem(this.key(this._langKey)),
      set: (value: string) =>
        localStorage.setItem(this.key(this._langKey), value),
    },
    theme: {
      get: () => localStorage.getItem(this.key(this._themeKey)),
      set: (value: string) =>
        localStorage.setItem(this.key(this._themeKey), value),
      isDark: () => {
        const theme = this.local.theme.get()
        
        if (!theme) {
          return false
        }

        return theme.endsWith('dark') // TODO Standardize this
      }
    },
  };

  private static key(key: string): string {
    return `${this._keyPrefix}.${key}`;
  }
}
