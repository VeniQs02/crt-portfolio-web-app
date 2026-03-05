import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  message = signal<string | null>(null);

  private timeoutId?: any;

  show(msg: string, duration = 3000) {
    this.message.set(msg);

    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.hide(), duration);
  }

  hide() {
    this.message.set(null);
  }
}
