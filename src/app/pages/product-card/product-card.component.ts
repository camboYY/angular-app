import { Component, inject, input } from '@angular/core';
import { AppPrimaryButton } from '../../components';
import { Product } from '../../models';
import { CardServiceService } from '../../services/card-service.service';

@Component({
  selector: 'app-product-card',
  imports: [AppPrimaryButton],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  product = input.required<Product>();
  cardService = inject(CardServiceService);
}
