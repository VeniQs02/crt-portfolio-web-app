import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {JewelCase} from './components/jewel-case/jewel-case';
import {BottomSection} from './components/bottom-section/bottom-section';
import {FooterSection} from './components/footer/footer-section.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JewelCase, BottomSection, FooterSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('untitled');
}
