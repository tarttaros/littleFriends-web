import { Injectable } from '@angular/core';
import { Category } from '../class/category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  static categories : string[] = [];
  constructor(private http: HttpClient) { }

  showCategories(){
    this.http.get('http://Proyecto-software-3-env.eba-eqmzk2p2.us-east-2.elasticbeanstalk.com:9090/category').subscribe((res: any) => {
      res.forEach((element: Category)  => {
        CategoryService.categories.push(element.description);
      });
    })}
}
