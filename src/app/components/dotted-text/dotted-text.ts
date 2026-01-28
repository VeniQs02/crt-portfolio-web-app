import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dotted-text',
  imports: [],
  templateUrl: './dotted-text.html',
  styleUrl: './dotted-text.css',
})
export class DottedText {
  @Input() dottedNumber!: string;
  @Input() dottedText!: string;
  @Input() tooltipText!: string;
  dots: string = '';

  private MAX_LENGTH: number = 48
  private dotCount: number = 0;

  ngOnInit(){
    this.dotCount = this.MAX_LENGTH - this.dottedText.length
    for(let i = 0; i <= this.dotCount; i++){
      this.dots = this.dots + '.';
    }
  }
}
