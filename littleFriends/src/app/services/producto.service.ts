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

  deleteProduct(productName:String){
  return this.http.delete('http://localhost:9090/product'+'/${productName}')
  console.log('${productName}');
}
*/
showProducts(){
  return this.http.get<Product[]>('http://Proyecto-env.eba-apnhh2qc.us-east-2.elasticbeanstalk.com:9090/product')
}



}
