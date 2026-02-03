import {Component} from '@angular/core';
import {TracklistRow} from "../tracklist-row/tracklist-row.component";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'tracklist',
  imports: [
    TracklistRow,
    TranslatePipe,
  ],
  templateUrl: './tracklist.html',
  styleUrl: './tracklist.css',
})
export class Tracklist {
  protected displayedTooltip: string | null = null;
  protected displayedTooltipTime: string | null = null;

  setTooltip(text: string | null) {
    this.displayedTooltip = text;
  }

  setTooltipTime(text: string | null) {
    this.displayedTooltipTime = text;
  }

  hasTooltip() {
    return this.displayedTooltip != null
  }
}
