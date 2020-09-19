export class Product {
    _id: number;
    name: String;
    description: String;
    price: number;
    stock:number;
    imageUrl:String;

    constructor(id, name, description = '', price = 0, stock:0 ,imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG') {
    this._id = id
    this.name = name
    this.description = description
    this.price = price
    this.stock = stock
    this.imageUrl = imageUrl
  }
}
