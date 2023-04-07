export class Category {
  description !: string;

  public get value() : string {
    return this.description;
  }

}
