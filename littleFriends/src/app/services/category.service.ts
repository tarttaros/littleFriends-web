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
    this.http.get('http://Backend-sftw3-env.eba-qmi3ideu.us-east-2.elasticbeanstalk.com:9090/category').subscribe((res: any) => {
      res.forEach((element: Category)  => {
        CategoryService.categories.push(element.description);
      });
    })}
}
