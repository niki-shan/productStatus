import { Component, Input, OnInit } from '@angular/core';
import { Iprod, psataus } from 'src/app/shared/models/data.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
 @Input() getData ! : Iprod
  constructor(private _prodservice : ProductService) { }

  ngOnInit(): void {
  }

  onBtnClick(obj : string){
    if(obj == psataus.Delivered){
        this._prodservice.onUpdateStatus(this.getData.id, psataus.Delivered)  
      alert(`Product status of ${this.getData.pname}  is  Delivered `)

    }
    if(obj == psataus.Dispatched){
      this._prodservice.onUpdateStatus(this.getData.id, psataus.Dispatched) 
      alert(`Product status of ${this.getData.pname} is Dispatched `)

  }
  if(obj == psataus.Inprograse){
    this._prodservice.onUpdateStatus(this.getData.id, psataus.Inprograse)   
    alert(`Product status of ${this.getData.pname} is Inprograse `)

}
  }

}
