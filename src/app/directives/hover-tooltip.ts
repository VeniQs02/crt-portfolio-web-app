import {Directive, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[HoverTooltip]',
})
export class HoverTooltip {

  @Input('HoverTooltip') text = '';

  private tooltip?: HTMLElement;

  constructor(private renderer: Renderer2) {
  }

  @HostListener('mouseenter')
  show() {
    this.tooltip = this.renderer.createElement('div');
    if (!this.tooltip) return;

    this.tooltip.textContent = this.text;
    this.renderer.addClass(this.tooltip, 'tooltip');
    this.renderer.appendChild(document.body, this.tooltip);
  }

  @HostListener('mousemove', ['$event'])
  move(e: MouseEvent) {
    if (!this.tooltip) return;

    this.renderer.setStyle(this.tooltip, 'left', e.clientX + 'px');
    this.renderer.setStyle(this.tooltip, 'top', e.clientY - 25 + 'px');
  }

  @HostListener('mouseleave')
  hide() {
    if (!this.tooltip) return;

    this.renderer.removeChild(document.body, this.tooltip);
    this.tooltip = undefined;
  }
}
