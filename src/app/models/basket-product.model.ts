import {ProductDto} from '../dto/product.dto';

export interface BasketProduct {
  product: ProductDto;
  quantity: number;
}
