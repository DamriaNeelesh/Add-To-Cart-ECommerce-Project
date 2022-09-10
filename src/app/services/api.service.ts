import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
// Mene yahan pe WO fake API Store se bahut sare product ka data get krke ek response res mai daal diya jo ki getProducts() se call hoga
  getProducts(){
    return this.http.get("https://fakestoreapi.com/products").pipe(map((res:any)=>{
      return res;
    }))

    
  }
}
