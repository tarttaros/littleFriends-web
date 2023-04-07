export class Product {
  nameProduct !: string;
  description !: string;
  quantityProduct !: number;
  price !: number;


  public get getNameProduct() : string {
    return this.nameProduct;
  }

  public get getDescription() : string {
    return this.description
  }

  public get getQuantityProduct() : number {
    return this.quantityProduct;
  }

  public get getPrice() : number {
    return this.price;
  }
}
