import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductDashboardComponent,
    ProductFormComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductDashboardComponent
  ]
})
export class ProductModule { }
