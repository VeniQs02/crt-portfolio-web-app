import {Component} from '@angular/core';
import {TracklistRow} from "../tracklist-row/tracklist-row.component";
import {TranslatePipe, TranslateService} from "@ngx-translate/core";

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

  private today: Date | undefined;
  private currentWorkHireDate: Date = new Date('2024-10-15');

  constructor(public translate: TranslateService) {}

  setTooltip(text: string | null) {
    this.displayedTooltip = text;
  }

  setTooltipTime(text: string | null) {
    this.displayedTooltipTime = text;
  }

  hasTooltip() {
    return this.displayedTooltip != null
  }

  displayYearAndMonth(year?: number | null, month?: number | null) {
    if (year == null && month == null) {
      this.today = new Date()

      month =
        (this.today.getFullYear() - this.currentWorkHireDate.getFullYear()) * 12 +
        (this.today.getMonth() - this.currentWorkHireDate.getMonth());

      year = Math.floor(month / 12);
      month %= 12;
    }

    let yearText: string;
    switch (year) {
      case 1:
        yearText = this.translate.instant('tracklist.time.year');
        break;
      case 2:
      case 3:
      case 4:
        yearText = this.translate.instant('tracklist.time.years1');
        break;
      case 3.5:
        yearText = this.translate.instant('tracklist.time.years2');
        break;
      default:
        yearText = this.translate.instant('tracklist.time.years3');
        break;
    }

    let monthText: string;
    switch (month) {
      case 1:
        monthText = this.translate.instant('tracklist.time.month');
        break;
      case 2:
      case 3:
      case 4:
        monthText = this.translate.instant('tracklist.time.months1');
        break;
      default:
        monthText = this.translate.instant('tracklist.time.months2');
        break;
    }

    let message = ''
    if (year != null) {
      message += year + ' ' + yearText + ' '
    }
    if (month != null) {
      message += month + ' ' + monthText
    }

    return message;
  }

}
