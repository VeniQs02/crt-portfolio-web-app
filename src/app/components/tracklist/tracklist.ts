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
  protected displayedTooltipKey: string | null = null;

  protected tooltipYear?: number | null;
  protected tooltipMonth?: number | null;

  private today: Date | undefined;
  private currentWorkHireDate: Date = new Date('2024-10-15');

  constructor(public translate: TranslateService) {
  }

  setTooltip(key: string | null) {
    this.displayedTooltipKey = key;
  }

  setTooltipTime(data: { year?: number | null; month?: number | null } | null | undefined) {
    if (data === undefined) {
      this.tooltipYear = undefined;
      this.tooltipMonth = undefined;
      return;
    }

    if (data === null) {
      this.tooltipYear = null;
      this.tooltipMonth = null;
      return;
    }

    this.tooltipYear = data.year;
    this.tooltipMonth = data.month;
  }

  hasTooltip() {
    return this.displayedTooltipKey != null
  }

  displayYearAndMonth(year?: number | null, month?: number | null) {
    if (year === undefined && month === undefined) {
      return '';
    }

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
