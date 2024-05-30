import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { CustomerLayoutComponent } from './components/customer-layout/customer-layout.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    CustomerLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
