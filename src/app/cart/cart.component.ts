import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products: any =[]
  public total!: number;

  constructor(private cartS: CartService) { }

  ngOnInit(): void {
    this.cartS.getProduct().subscribe(res=>{
      this.products = res;
      this.total = this.cartS.getPrice()
    })
  }

  onRemove(product: any){
    this.cartS.removeItem(product)
  }

  clearAll(){
    this.cartS.removeAll(); 
  }

}
