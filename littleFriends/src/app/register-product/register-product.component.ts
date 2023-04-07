import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Product } from '../class/product';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})

export class RegisterProductComponent implements OnInit {

  typesOfCategories !: string[];
  product : Product = new Product();
  constructor(private registerService: RegisterService, private categoryService : CategoryService) { }

  ngOnInit(): void {
  }

  productRegister()
  {
    this.registerService.registerProduct(this.product).subscribe(data=>{alert("Producto registrado con exito")},error=>alert("El producto no se ha podido registrar"))
  }

  showCategories(){
    this.categoryService.showCategories();
    this.typesOfCategories = CategoryService.categories;
    CategoryService.categories = [];
  }
}
