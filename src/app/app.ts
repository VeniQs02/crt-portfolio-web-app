import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Tracklist} from './components/tracklist/tracklist';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tracklist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('untitled');
}
