import { Component, OnInit, Renderer2 } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LanguagePopOverPage } from '../language-pop-over/language-pop-over.page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  theme = 'Light';


  constructor(public renderer: Renderer2, public popoverCtrl: PopoverController,
    public alertCtrl: AlertController, public translate: TranslateService) { }

  ngOnInit() {

  }

  onToggleColorTheme(event) {
    console.log(event);
    console.log(event.detail.checked);
    if (event.detail.checked) {
      // document.body.setAttribute('color-theme', 'dark');
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
      this.theme = 'Dark';
    }
    else {
      // document.body.setAttribute('color-theme', 'light');
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
      this.theme = 'Light';
    }
  }

  async openLanguagePopOver(ev) {
    const popover = await this.popoverCtrl.create({
      component: LanguagePopOverPage,
      event: ev
    });
    await popover.present();
  }
}
