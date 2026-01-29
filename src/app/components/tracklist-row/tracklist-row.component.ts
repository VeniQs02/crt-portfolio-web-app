import {Component, Input} from '@angular/core';

@Component({
  selector: 'tracklist-row',
  imports: [],
  templateUrl: './tracklist-row.component.html',
  styleUrl: './tracklist-row.component.css',
})
export class TracklistRow {
  @Input() tracklistNumber!: string;
  @Input() tracklistText!: string;
  @Input() tracklistTooltip!: string;
  dots: string = '';

  private MAX_LENGTH: number = 48;
  private dotCount: number = 0;

  ngOnChanges() {
    this.dotCount = this.MAX_LENGTH - [...this.tracklistText].length;
    this.dots = '.'.repeat(this.dotCount);
  }
}
