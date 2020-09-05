import { Component, OnInit } from '@angular/core';
import { $, element } from 'protractor';
import { CompanyserviceService } from '../companyservice.service';
import { Company } from '../company';
import { CompanyStockPrice } from '../company-stock-price';
import {RendermapComponent} from "../Rendermap/rendermap.component"

@Component({
  selector: 'app-comparecompany',
  templateUrl: './comparecompany.component.html',
  styleUrls: ['./comparecompany.component.css']
})
export class ComparecompanyComponent implements OnInit {

  companies: Company[];
  stockPrices: CompanyStockPrice[];
  stockPricesList=[]

  public companyvalue: string;
  public stockexchangevalue: string;
  public fromperiod: string;
  public toperiod: string;
  public periodicity: number;

  public companyList: number[] = [];
  public obj : any;
  public formdata: JSON;

  public companyId: number;
  public companyCode: number;
  
  constructor(private companyService : CompanyserviceService) { }

  ngOnInit(): void {
    this.companyService.findAllCompanies().subscribe(data => { 
      this.companies = data
      // console.log(data);
    });
    
  }
  
  saveFormData(): void{
    // console.log(this.companyvalue);
    // console.log(this.stockexchangevalue);
    // console.log(this.fromperiod);
    // console.log(this.toperiod);
    // console.log(this.periodicity);
    
    this.companies.forEach(element => {
      // console.log(element.companyName);
      // console.log(this.companyvalue);
      if(element.companyName == this.companyvalue)
      {
        this.companyCode = element.companyCode;
        // console.log(element.companyCode);
      }
    });
    // console.log(this.companyCode);
    this.companyList.push(this.companyCode);
  }

  sendData(): void{
    this.obj = {
      "companyList": this.companyList,
      "from": this.fromperiod,
      "to": this.toperiod,
      "periodicity": Number(this.periodicity)
    };

    this.formdata = <JSON>this.obj;
    // console.log(this.formdata);

    this.companyService.findStockPrices(this.obj).subscribe(data => {
      this.stockPrices=data;
      this.stockPricesList.push(data);
      console.log(data);
    })

    // console.log(this.stockPricesList)

  }
  
}
