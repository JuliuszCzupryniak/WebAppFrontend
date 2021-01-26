import {Component} from '@angular/core';
import {BasketService} from '../services/basket.service';
import {BasketProduct} from '../models/basket-product.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {

  basket: BasketProduct[] = this.service.basket;

  constructor(private service: BasketService) {
  }

  sumBasket = () => this.basket.reduce((sum, b) => sum + b.product.price_product * b.quantity, 0);

  clearBasket() {
    this.basket = [];
    this.service.clearBasket();
  }

}
