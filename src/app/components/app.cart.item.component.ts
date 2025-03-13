import { Component, inject, input } from '@angular/core';
import { Product } from '../models';
import { CardServiceService } from '../services/card-service.service';
import { ButtonComponent } from './app.button.component';

@Component({
  selector: 'app-cart-item',
  template: `<div
    class="bg-white shadow-md border-0 rounded-xl p-6 flex gap-4 items-center"
  >
    <img [src]="item().image" class="w-[50px] h-[50px] object-contain" />
    <div class="flex flex-col">
      <span class="text-md font-bold">{{ item().title }}</span>
      <span class="text-sm"> {{ '$' + item().price }}</span>
    </div>
    <div class="flex-1"></div>
    <app-button
      label="Remove"
      (btnClicked)="cartService.removeFromCart(item())"
    />
  </div>`,
  imports: [ButtonComponent],
})
export class AppCartItemComponent {
  item = input.required<Product>();
  cartService = inject(CardServiceService);
}
