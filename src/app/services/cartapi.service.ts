import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {
// Yahan pr ham get,set,remove product wale kaam krenge
  cartDataList:any = [];
// behavior subject ensures that the component consuming the service receives the last updated data 
// even if there are no new updates since the component's subscription to this data.
  productList = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

// Getting the Productsfrom the requests
  getProductData(){
    return this.productList.asObservable()
  }

// Set Product Data
  setProduct(product:any){
    // Jis Element ko hamne click kiya hai wo aur uska data push ho jaega
    this.cartDataList.push(...product);
    this.productList.next(product)
  }

// Add to Cart Detail
  addToCart(product:any){
    this.cartDataList.push(product);
    this.productList.next(this.cartDataList);
    this.getTotalAmount();
    console.log(this.cartDataList);
  }

// Get Total Amount
  getTotalAmount(){
    let grandTotal = 0;
    this.cartDataList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  // remove Cart data One by One
  removeCartData(product:any){
    this.cartDataList.map((a:any,index:any)=>{
      if(product.id == a.id){
        this.cartDataList.splice(index,1);
      }
    })
    this.productList.next(this.cartDataList);
  }

  removeAllCart(){
    this.cartDataList=[] // Empty array assign kr denge
    this.productList.next(this.cartDataList)
  }

}
