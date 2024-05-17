import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  currentIndex: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.products.length) % this.products.length;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.products.length;
  }
}
