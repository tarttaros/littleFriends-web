import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../class/product';
import { User } from '../class/user';
import { Veterinary } from '../class/veterinary';

@Injectable({
  providedIn: 'root'
})
export class RegisterService
{
  constructor(private httpClient: HttpClient) { }

  registerUser(user:User) : Observable<Object>
  {
    return this.httpClient.post('http://localhost:9090/user',user);
  }

  registerVet(vet:Veterinary) : Observable<Object>
  {
    return this.httpClient.post('http://localhost:9090/vet',vet);
  }

  registerProduct(product:Product) : Observable<Object>
  {
    return this.httpClient.post('http://localhost:9090/product',product);
  }
}
