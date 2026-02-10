import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'footer-section',
  imports: [],
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.css',
})
export class FooterSection implements OnInit {
  protected currentYear: string = '';

  ngOnInit() {
    let date = new Date();
    this.currentYear = date.getFullYear().toString();
  }
}
