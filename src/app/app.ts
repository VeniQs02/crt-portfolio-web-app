import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Tracklist} from './components/tracklist/tracklist';
import {Cd} from './components/cd/cd';
import {JewelCase} from './components/jewel-case/jewel-case';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tracklist, Cd, JewelCase],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('untitled');
}
