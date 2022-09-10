import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalItemNumber:number = 0;
  // Jis Jis service ka kaam hame jahan html ya ts mai chahiye usko uske constructor mai dana zarorri hai
  constructor(private cartApi:CartapiService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res=>{
      this.totalItemNumber = res.length;
      // Hamne wo cartApi wali service mai jo getProductData wala fxn banaya tha usme se wo totla no. wale ki length li hai kaam mai
    })
  }

}
