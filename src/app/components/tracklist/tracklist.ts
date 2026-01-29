import { Component } from '@angular/core';
import {TracklistRow} from "../tracklist-row/tracklist-row.component";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'tracklist',
    imports: [
        TracklistRow,
        TranslatePipe
    ],
  templateUrl: './tracklist.html',
  styleUrl: './tracklist.css',
})
export class Tracklist {
    private displayedTooltip: string = '';
}
