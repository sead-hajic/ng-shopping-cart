import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productList: any;
  searchKey: string = ''
  public filterCategory: any

  constructor(private api: ApiService,
    private cartApi: CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList = res;

      this.productList.forEach((item: any)=>{
        if(item.category === "women's clothing" || item.category === "men's clothing"){
          item.category = "fashion"
        }
        Object.assign(item,{quantity: 1, total:item.price})
      })
      console.log(this.productList)
    })
    this.cartApi.search.subscribe(val=>{
      this.searchKey = val;
    })
  }

  onAddProduct(product: any){
    this.cartApi.addToCart(product)
  }

  filter(category: string){
    this.filterCategory = this.productList.filter((val:any)=>{
      if(val.category == category || category == ''){
        return val;
      }
    })
    
  }

}
