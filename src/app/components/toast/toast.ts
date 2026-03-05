import {Component, inject} from '@angular/core';
import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'toast',
  imports: [],
  standalone: true,
  templateUrl: './toast.html',
  styleUrl: './toast.css',
})
export class Toast {
  toast = inject(ToastService);
}
