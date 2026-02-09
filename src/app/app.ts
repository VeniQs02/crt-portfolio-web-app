import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {JewelCase} from './components/jewel-case/jewel-case';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JewelCase],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('untitled');
}
