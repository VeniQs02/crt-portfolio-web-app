import {Component, EventEmitter, Output} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {CommonModule} from '@angular/common';
import {ToastService} from '../../services/toast.service';
import {HoverTooltip} from '../../directives/hover-tooltip';
import {FlagButton} from '../flag-button/flag-button';

@Component({
  selector: 'bottom-section',
  imports: [CommonModule, TranslatePipe, HoverTooltip, FlagButton],
  templateUrl: './bottom-section.html',
  styleUrl: './bottom-section.css',
})
export class BottomSection {
  @Output() languageChangeEvent = new EventEmitter<void>();

  emitLanguageChange() {
    this.languageChangeEvent.emit()
  }

  constructor(private toast: ToastService) {
  }

  copyToClipboard() {
    navigator.clipboard.writeText("jakub.kangowski7@vp.pl");
    this.toast.show('Text copied to clipboard');
  }
}
