import {Component} from '@angular/core';
import {BasketService} from '../services/basket.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  sum: Observable<number> = this.basketService.getBasketSum();

  constructor(private basketService: BasketService) {
  }

}
