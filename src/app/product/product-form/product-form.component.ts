import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { psataus } from 'src/app/shared/models/data.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  prodForm ! : FormGroup
  constructor(private _ProductService : ProductService ) { }

  ngOnInit(): void {
   this.createForm()
  }



  createForm (){
    this.prodForm = new FormGroup ({
      pname : new FormControl (null, [Validators.required]),
      pdetail : new FormControl (null, [Validators.required])
    })
  }

  onFormSub(){
    if(this.prodForm.valid){
      let obj = {...this.prodForm.value, pstatus : psataus.Delivered}
      this._ProductService.onSingleProd(obj)
      alert(`The new product ${obj.pname} is added`)
    }
  }
}
