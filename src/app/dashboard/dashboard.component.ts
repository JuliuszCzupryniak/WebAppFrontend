import {Component} from '@angular/core';
import {BasketService} from '../services/basket.service';
import {ProductDto} from '../dto/product.dto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  fruits: ProductDto[] = [];
  vegetables: ProductDto[] = [];

  constructor(private service: BasketService) {
    this.service.getProducts().subscribe(products => {
      this.vegetables = products.filter(p => p.id_category === 1);
      this.fruits = products.filter(p => p.id_category === 2);
    });
  }

  addProduct(product: ProductDto): void {
    this.service.addProduct(product);
  }

}
