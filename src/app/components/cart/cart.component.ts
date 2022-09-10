import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  products:any=[];
  allProducts:any=0;
  constructor(private cartApi:CartapiService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res=>{
      this.products=res;
      this.allProducts = this.cartApi.getTotalAmount();
// Hamne wo cartApi wali service mai jo getProductData wala fxn banaya tha usme se wo getTotalAmount wala kaam mai liya apiservice.kamKaFxn()

    })
  }

  removeProduct(item:any){
    this.cartApi.removeCartData(item);
  }

  totalAmount(){
    this.cartApi.getTotalAmount;
  }

  removeAllProduct(){
    this.cartApi.removeAllCart();
  }
  
}
