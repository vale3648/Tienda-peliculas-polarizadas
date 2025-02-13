import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && localStorage) {
      this.darkMode = localStorage.getItem('theme') === 'dark';
    }
    this.updateTheme();
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
    }
    this.updateTheme();
  }

  private updateTheme(): void {
    if (typeof document !== 'undefined') {
      if (this.darkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }
}