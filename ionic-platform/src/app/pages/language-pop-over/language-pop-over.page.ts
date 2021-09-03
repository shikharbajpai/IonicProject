import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-language-pop-over',
  templateUrl: './language-pop-over.page.html',
  styleUrls: ['./language-pop-over.page.scss'],
})
export class LanguagePopOverPage implements OnInit {
  languages = [];
  selected = '';

  constructor(public popoverCtrl: PopoverController, public languageService: LanguageService) { }

  ngOnInit() {
    this.languages = this.languageService.getLanguages();
    this.selected = this.languageService.selected;
  }

  select(lng) {
    this.languageService.setLanguage(lng);
    this.popoverCtrl.dismiss();
  }

}
