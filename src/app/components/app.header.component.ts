import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardServiceService } from '../services/card-service.service';
import { AppPrimaryButton } from './app.primary.component';

@Component({
  selector: 'app-header',
  styles: ``,
  template: `<div
    class="justify-between w-full flex items-center gap-x-4 rounded-xl bg-white p-2 shadow-lg outline outline-black/5 dark:bg-slate-100 dark:shadow dark:-outline-offset-1 dark:outline-white/10"
  >
    <h2 class="text-xl cursor-pointer" routerLink="/">My store</h2>
    <app-primary-button
      [label]="'Cart(' + cardService.cart().length + ')'"
      (btnClick)="showButtonClick()"
      routerLink="card"
    />
  </div>`,
  standalone: true,
  imports: [AppPrimaryButton, RouterLink],
})
export class AppHeader {
  cardService = inject(CardServiceService);
  showButtonClick() {
    console.log('clicked');
  }
}
