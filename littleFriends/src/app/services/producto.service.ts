import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../class/product';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  static products : Product[] = [];
  constructor(private http: HttpClient) { }

  showProducts(){
    this.http.get('http://localhost:9090/product').subscribe((res: any) => {
      res.forEach((element: Product)  => {
        ProductoService.products.push(element);
      });
    })}

}
