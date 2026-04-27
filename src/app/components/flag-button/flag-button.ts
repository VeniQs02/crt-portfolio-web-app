import {Component, EventEmitter, Output} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'flag-button',
  imports: [
    TranslatePipe
  ],
  templateUrl: './flag-button.html',
  styleUrl: './flag-button.css',
})
export class FlagButton {
  @Output() languageChangeEvent = new EventEmitter<void>();

  currentFlag = 'flag_poland.png';
  isAnimating = false;

  flagClick() {
    if (this.isAnimating) return;

    this.isAnimating = true;

    setTimeout(() => {
      this.currentFlag =
        this.currentFlag === 'flag_poland.png'
          ? 'flag_uk.png'
          : 'flag_poland.png';

      this.languageChangeEvent.emit();
      this.isAnimating = false;
    }, 100);
  }
}
