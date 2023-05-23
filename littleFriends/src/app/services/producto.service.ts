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
    this.http.get('http://Backend-sftw3-env.eba-qmi3ideu.us-east-2.elasticbeanstalk.com:9090/product').subscribe((res: any) => {
      res.forEach((element: Product)  => {
        ProductoService.products.push(element);
      });
    })}

}
