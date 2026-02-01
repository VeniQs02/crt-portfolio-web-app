import {Component, EventEmitter, Input, Output} from '@angular/core';

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
  @Input() tracklistTooltipTime!: string;
  @Output() hoverTooltip = new EventEmitter<string | null>();
  @Output() hoverTooltipTime = new EventEmitter<string | null>();

  private MAX_LENGTH: number = 48;

  private dotCount: number = 0;
  protected dots: string = '';

  ngOnChanges() {
    this.dotCount = this.MAX_LENGTH - [...this.tracklistText].length;
    this.dots = '.'.repeat(this.dotCount);
  }

  onEnter() {
    this.hoverTooltip.emit(this.tracklistTooltip);
    this.hoverTooltipTime.emit(this.tracklistTooltipTime);
  }

  onLeave() {
    this.hoverTooltip.emit(null);
    this.hoverTooltipTime.emit(null);

  }
}
