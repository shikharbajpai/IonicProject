import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  selected = '';

  constructor(public translate: TranslateService) { }

  setInitialAppLanguage() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.selected = 'en';
  }

  getLanguages() {
    return [
      { text: 'English', value: 'en' },
      { text: 'Hindi', value: 'hi' }
    ];
  }

  setLanguage(lng) {
    this.translate.use(lng);
    this.selected = lng;
  }
}
