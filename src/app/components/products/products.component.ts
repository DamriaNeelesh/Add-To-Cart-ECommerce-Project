import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList:any;
  constructor(private api:ApiService,
    private cartApi:CartapiService) { }


  // Yahan ham wo api ki request jo hamne service mai banai getProducts() se thi usko ham yahan pe subscribe kr rhe 
  // hain aur jo bhi usse response aa rha hai usko ham productList mai daal denge
  // Agr service le andr he data banaya hota toh service ko request banake susbscribe krte
  // upr jo hamne api banai hai wo getProducts ke liye hai
  ngOnInit(): void {
    this.api.getProducts().subscribe(res=>{
      this.productList=res;
      // Ek ek Product ko Hame map krna padega
      // forEach() method executes a provided a function once for each array element
      this.productList.array.forEach((a:any) => {
         Object.assign(a,{quantity:1,total:a.price}) // Ek-ek ko hamne object ke roop mai assign kiya hai aur usme quantity aur price 
      });
    })
  }

  // Upr jo dusri hamne cartApi service banai hai wo addToCart ke liye hai
  addtoCart(item:any){
    this.cartApi.addToCart(item);
  }
}
