import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TracklistRow} from './components/tracklist-row/tracklist-row.component';
import {TranslatePipe} from '@ngx-translate/core';
import {Tracklist} from './components/tracklist/tracklist';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TracklistRow, TranslatePipe, Tracklist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('untitled');
}
