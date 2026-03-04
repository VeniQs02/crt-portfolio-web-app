import {Component, EventEmitter, Output} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {CommonModule} from '@angular/common';

@Component({
  selector: 'bottom-section',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './bottom-section.html',
  styleUrl: './bottom-section.css',
})
export class BottomSection {
  @Output() languageChangeEvent = new EventEmitter<void>();

  emitLanguageChange(){
    this.languageChangeEvent.emit()
  }
}
