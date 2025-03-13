import { Component, computed, inject } from '@angular/core';
import { CardServiceService } from '../services/card-service.service';
import { AppPrimaryButton } from './app.primary.component';

@Component({
  imports: [AppPrimaryButton],
  selector: 'app-order-summary',
  template: `<div class="bg-slate-100 p-6 rounded-xl shadow-xl border-0">
    <h2 class="text-2xl">Order Summary</h2>
    <div class="flex flex-col gap-4">
      <div class="flex gap-4">
        <span class="text-lg">Total</span>
        <span class="text-lg font-bold">{{ '$ ' + total() }}</span>
      </div>
      <app-primary-button label="Proceed to checkout" />
    </div>
  </div>`,
})
export class AppOrderSummaryComponent {
  cartService = inject(CardServiceService);
  total = computed(() => {
    let total = 0;
    for (const item of this.cartService.cart()) {
      total += item.price;
    }
    return total;
  });
}
