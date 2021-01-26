export interface PurchaseDto {
  id_purchase: number;
  id_customer: number;
  delivery_city: string;
  delivery_zipcode: string;
  delivery_address: string;
  sum_purchase: number;
  bought: boolean;
}
