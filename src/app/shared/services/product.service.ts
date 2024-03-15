import { Injectable } from '@angular/core';
import { Iprod, psataus } from '../models/data.model';
import { product } from '../const/data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 products : Iprod[] = product
  constructor() { }


  getAllProd(){
    return this.products
  }

  onSingleProd(obj : Iprod){
    this.products.push(obj)
  }

  onUpdateStatus(id : number, updateName : psataus){
    for (const obj of this.products){
      if(obj.id == id){
          obj.pstatus = updateName
      }
    } {
      
    }
  }
}
