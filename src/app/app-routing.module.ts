import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExcelfileuploadComponent } from './excelfileupload/excelfileupload.component';
import { StockpriceComponent } from './stockprice/stockprice.component';
const routes: Routes = [

{ path: 'excelfileupload', component: ExcelfileuploadComponent },
{ path: 'stockprice', component: StockpriceComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
