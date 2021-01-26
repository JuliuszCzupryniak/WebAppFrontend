import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {ProductDto} from '../dto/product.dto';
import {BasketProduct} from '../models/basket-product.model';
import {map, tap} from 'rxjs/operators';
import {PurchaseDto} from '../dto/purchase.dto';
import {PurchaseRowDto} from '../dto/purchase-row.dto';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basketSum: Subject<number>;
  basket: BasketProduct[] = [];

  constructor(private http: HttpClient) {
    this.basketSum = new Subject<number>();
    setTimeout(() => this.basketSum.next(0));
  }

  getProducts(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>('/api/products');
  }

  addProduct(product: ProductDto): void {
    const exist = this.basket.find(p => p.product.id_product === product.id_product);
    if (exist) {
      this.basket = [...this.basket.filter(p => p.product.id_product !== exist.product.id_product), {
        product: exist.product,
        quantity: exist.quantity + 1
      }];
    } else {
      this.basket.push({product, quantity: 1});
    }
    this.basketSum.next(this.basket.reduce((sum, b) => sum + b.product.price_product * b.quantity, 0));
  }

  getBasketSum(): Observable<number> {
    return this.basketSum;
  }

  clearBasket(): void {
    this.basket = [];
    this.basketSum.next(0);
  }

  sendOrder(city: string, zipcode: string, address: string): Observable<any> {
    return this.http.post<PurchaseDto>('/api/purchases', {
      id_customer: 1,
      delivery_city: city,
      delivery_zipcode: zipcode,
      delivery_address: address,
      sum_purchase: 0,
      bought: false
    }).pipe(
      tap(p => console.log(p)),
      map((purchase: PurchaseDto) => this.http.post('/api/purchase_rows', this.basket.map((b) => ({
        id_product: b.product.id_product,
        id_purchase: purchase.id_purchase,
        quantity: b.quantity,
        sum_row: b.quantity * b.product.price_product
      }))))
    );
  }

}
