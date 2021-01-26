import {Component} from '@angular/core';
import {BasketService} from '../services/basket.service';

@Component({
  selector: 'app-order-completion',
  templateUrl: './order-completion.component.html',
  styleUrls: ['./order-completion.component.scss']
})
export class OrderCompletionComponent {

  city = '';
  zipcode = '';
  address = '';

  constructor(private service: BasketService) {
  }

  sendOrder(): void {
    this.service.sendOrder(this.city, this.zipcode, this.address).subscribe();
  }

}
