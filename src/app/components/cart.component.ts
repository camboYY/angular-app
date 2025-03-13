import { Component, inject } from '@angular/core';
import { CardServiceService } from '../services/card-service.service';
import { AppCartItemComponent } from './app.cart.item.component';
import { AppOrderSummaryComponent } from './app.order.summary.component';

@Component({
  selector: 'App-card-component',
  imports: [AppCartItemComponent, AppOrderSummaryComponent],
  template: `<div class="p-6 flex flex-col gap-4">
    <h2 class="text-2xl">Shopping cart</h2>

    @for (item of cartService.cart(); track item.id) {
    <app-cart-item [item]="item" />
    }
    <app-order-summary />
  </div>`,
})
export class AppCartComponent {
  cartService = inject(CardServiceService);
}
