import { Component, Input, OnInit } from '@angular/core';
import { Storage } from 'src/app/storage';

const LightThemeKey = 'light'
const DarkThemeKey = 'dark'

@Component({
  selector: 'app-theme-toggle-button',
  templateUrl: './theme-toggle-button.component.html',
  styleUrls: ['./theme-toggle-button.component.scss']
})
export class ThemeToggleButtonComponent implements OnInit {

  @Input() size = 'md'

  constructor() { }

  ngOnInit(): void {
  }

  get icon(): string {
    return this.isDarkTheme
      ? 'sun'
      : 'moon'
  }

  private get isDarkTheme(): boolean {
    const theme = Storage.local.theme.get()

    if (!theme) {
      return false
    }

    return theme.endsWith(DarkThemeKey)
  }

  onClicked() {
    const newTheme = this.isDarkTheme
      ? LightThemeKey
      : DarkThemeKey

    Storage.local.theme.set(newTheme)
  }
}
