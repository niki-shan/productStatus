import { Component, OnInit } from '@angular/core';
import { Iprod } from 'src/app/shared/models/data.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
 productArr !: Iprod[] 
  constructor(private _prodService : ProductService) { }

  ngOnInit(): void {
    this.productArr = this._prodService.getAllProd()
  }

}
