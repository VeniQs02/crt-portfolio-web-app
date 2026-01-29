import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TracklistRow} from './components/dotted-text/tracklist-row.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TracklistRow, TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('untitled');
}
