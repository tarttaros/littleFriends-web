import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../class/product';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  static products : Product[];
  constructor(private http: HttpClient) { }
/*
  showProducts(){
    this.http.get('http://Proyecto-env.eba-apnhh2qc.us-east-2.elasticbeanstalk.com:9090/product').subscribe((res: any) => {
      res.forEach((element: Product)  => {
        ProductoService.products.push(element);
      });
    })}

        showProducts(){
      this.http.get('http://localhost:9090/product').subscribe((res: any) => {
        res.forEach((element: Product)  => {
          ProductoService.products.push(element);
        });
      })}
*/
showProducts(){
  return this.http.get<Product[]>('http://localhost:9090/product')
}

}
