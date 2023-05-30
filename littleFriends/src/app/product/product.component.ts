import { Component, OnInit } from '@angular/core';
import { Product } from '../class/product';
import { ProductoService } from '../services/producto.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductoService) { }

    ngOnInit(): void {
      this.productService.showProducts()
      .subscribe(data=>
        {this.products=data;
        })

        if(localStorage.getItem("persona") == "admin"){
          ProductComponent.admin = true;
        }
        else if(localStorage.getItem("persona") == "vet"){
          ProductComponent.vet = true;
        }
        else if(localStorage.getItem("persona") == "user"){
          ProductComponent.user = true;
        }
        else{
          ProductComponent.user = false;
          ProductComponent.vet = false;
          ProductComponent.admin = false;
        }
    }
/*
    delete(product:Product){
      this.productService.deleteProduct(product.nameProduct).subscribe(
        res=>this.productService.showProducts().subscribe(
          data=>this.products=data))
    }
*/

  static admin: boolean;
  static user: boolean;
  static vet: boolean;


  products !: Product[];
  product : Product = new Product();

  get gStaticUser(){
    return ProductComponent.user;
  }

  get gStaticVet(){
    return ProductComponent.vet;
  }

  get gStaticAdmin(){
    return ProductComponent.admin;
  }

}
