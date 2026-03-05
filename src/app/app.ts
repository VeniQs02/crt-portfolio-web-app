import {Component, inject, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {JewelCase} from './components/jewel-case/jewel-case';
import {BottomSection} from './components/bottom-section/bottom-section';
import {FooterSection} from './components/footer/footer-section.component';
import {TranslateService} from '@ngx-translate/core';
import {Toast} from './components/toast/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JewelCase, BottomSection, FooterSection, Toast],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');

  private translate = inject(TranslateService);
  private currentLanguage: string = 'pl';

  changeLanguage(): void {
    if (this.currentLanguage == 'en') {
      this.currentLanguage = 'pl'
      this.translate.use(this.currentLanguage);
    } else if (this.currentLanguage == 'pl') {
      this.currentLanguage = 'en'
      this.translate.use(this.currentLanguage);
    }
  }
}
