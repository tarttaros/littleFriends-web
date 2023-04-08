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
    this.http.get('http://localhost:9090/category').subscribe((res: any) => {
      res.forEach((element: Category)  => {
        CategoryService.categories.push(element.description);
      });
    })}

/*
    res.forEach((element: Category) => {
      this.category.push(element.description);
    });*/
}
