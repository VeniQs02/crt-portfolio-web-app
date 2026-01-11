import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dotted-text',
  imports: [],
  templateUrl: './dotted-text.html',
  styleUrl: './dotted-text.css',
})
export class DottedText {
  @Input() dottedNumber!: string;
  @Input() dottedText!: string;

}
