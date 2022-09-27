import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([])
  public search = new BehaviorSubject<string>("")

  constructor() { }

  getProduct(){
    return this.productList.asObservable()
  }

  setProduct(product: any){
    this.cartItemList.push(...product)
    this.productList.next(product)
  }

  addToCart(product: any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList)
    this.getPrice()
    console.log(this.cartItemList)
  }

  getPrice(): number{
    let totalPrice = 0;
    this.cartItemList.map((price: any) =>{
      totalPrice += price.total
    })
    return totalPrice;
  }

  removeItem(product: any){
    this.cartItemList.map((a: any, index:any) => {
      if(product.id === a.id){
        this.cartItemList.splice(index,1)
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAll(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
