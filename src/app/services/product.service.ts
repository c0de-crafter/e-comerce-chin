import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Luz De Noche Tulipán 21E1', price: 50.00, imageUrl: 'https://demodaimport.tiendada.com/api/scrooge/file/FL-46985299' },
    { id: 2, name: 'Teckwe Lámpara Led 21E1', price: 25.00, discount: 17, imageUrl: 'https://demodaimport.tiendada.com/api/scrooge/file/FL-4E3675E2' },
    { id: 3, name: 'Luz nocturna de rosa dorada 21E1', price: 35.00, imageUrl: 'https://demodaimport.tiendada.com/api/scrooge/file/FL-49B956A3' }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
