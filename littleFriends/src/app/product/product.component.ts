import { Component, OnInit } from '@angular/core';
import { Product } from '../class/product';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products !: Product[];
  product : Product = new Product();
  displayedColumns: string[] = ['Nombre', 'Precio', 'Cantidad', 'Descripcion'];
  constructor(private productService: ProductoService) { }

    ngOnInit(): void {
      this.productService.showProducts();
      this.products = ProductoService.products;
      ProductoService.products = [];
  }

  static user: Boolean = true;

  static showDataUser() {
      this.user = true;
  }

  static hideDataUser() {
      this.user = false;
  }

  static vet: Boolean = true;

  static showDataVet() {
      this.vet = true;
  }

  static hideDataVet() {
      this.vet = false;
  }

  static admin: Boolean = true;

  static showDataAdmin() {
      this.admin = true;
  }

  static hideDataAdmin() {
      this.admin = false;
  }

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
