import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public totalItem!: number;
  public searchWord: string = '';


  constructor(private cartS: CartService) { }

  ngOnInit(): void {
    this.cartS.getProduct().subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  search(event: any){
    this.searchWord = (event.target as HTMLInputElement).value
    console.log(this.searchWord)
    this.cartS.search.next(this.searchWord)
  }

}
