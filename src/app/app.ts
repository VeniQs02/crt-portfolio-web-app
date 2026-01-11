import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DottedText} from './components/dotted-text/dotted-text';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DottedText],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('untitled');
}
