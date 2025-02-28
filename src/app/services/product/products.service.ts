import { Injectable } from '@angular/core';
import { MOCK_PRODUCTS } from '../../../mock/products.mock';
import { Product } from '../../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = MOCK_PRODUCTS;

  constructor() {}

  selectProductById(id: number){
    for (let product of this.products) {
      if (product.id === id){
        let productData: Product = {
          id: product.id,
          name: product.name,
          price: product.price,
          sizes: product.sizes,
          category: product.category,
          description: product.description,
          images: product.images
        }
        return productData;
      }
    }
    return {
      id: 0,
      name: "",
      price: 0,
      sizes: [],
      category: "",
      description: "",
      images: []
    }
  }
}
