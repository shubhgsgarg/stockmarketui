import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
import { FormBuilder } from "@angular/forms";
import {ExportService} from './_services/export.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Stock Exchange';
  chart1=[];
  chart2=[];

  responses1 = [
    {
        "companyStockPriceId": 1,
        "companyCode": 1002,
        "stockExchange": "nsc",
        "currentPrice": 10.7,
        "date": "2020-01-28",
        "time": "12:15:00"
    },
    {
        "companyStockPriceId": 2,
        "companyCode": 1002,
        "stockExchange": "nsc",
        "currentPrice": 50.7,
        "date": "2020-02-28",
        "time": "12:15:00"
    },
    {
        "companyStockPriceId": 3,
        "companyCode": 1002,
        "stockExchange": "nsc",
        "currentPrice": 30.7,
        "date": "2020-03-03",
        "time": "12:15:00"
    },
    {
      "companyStockPriceId": 1,
      "companyCode": 1002,
      "stockExchange": "nsc",
      "currentPrice": 10.7,
      "date": "2020-04-28",
      "time": "12:15:00"
    },
    {
        "companyStockPriceId": 2,
        "companyCode": 1002,
        "stockExchange": "nsc",
        "currentPrice": 50.7,
        "date": "2020-05-28",
        "time": "12:15:00"
    },
    {
        "companyStockPriceId": 3,
        "companyCode": 1002,
        "stockExchange": "nsc",
        "currentPrice": 30.7,
        "date": "2020-06-03",
        "time": "12:15:00"
    }
  ]
  responses2 = [
      {
          "companyStockPriceId": 1,
          "companyCode": 1003,
          "stockExchange": "nsc",
          "currentPrice": 70.7,
          "date": "2020-01-28",
          "time": "12:15:00"
      },
      {
          "companyStockPriceId": 2,
          "companyCode": 1003,
          "stockExchange": "nsc",
          "currentPrice": 20.7,
          "date": "2020-02-28",
          "time": "12:15:00"
      },
      {
          "companyStockPriceId": 3,
          "companyCode": 1003,
          "stockExchange": "nsc",
          "currentPrice": 45.7,
          "date": "2020-03-03",
          "time": "12:15:00"
      },
      {
        "companyStockPriceId": 1,
        "companyCode": 1003,
        "stockExchange": "nsc",
        "currentPrice": 70.7,
        "date": "2020-04-28",
        "time": "12:15:00"
    },
    {
        "companyStockPriceId": 2,
        "companyCode": 1003,
        "stockExchange": "nsc",
        "currentPrice": 20.7,
        "date": "2020-05-28",
        "time": "12:15:00"
    },
    {
        "companyStockPriceId": 3,
        "companyCode": 1003,
        "stockExchange": "nsc",
        "currentPrice": 45.7,
        "date": "2020-06-03",
        "time": "12:15:00"
    }
  ]
  xlabels1 = [];
  xlabels2 = [];
  data1 = []; 
  data2 = [];
  label1 ="First company/sector";
  label2 ="Second company/sector";
  avg1=0; 
  avg2=0;
  charttype= 'line';
  chartnumber: any;



//  <button (click)="getData()">Fetch Data</button>

  setResponse( res1, res2, company1,company2)
  {
    this.responses1 = res1;
    this.responses2 = res2;
    this.label1 = company1;
    this.label2 = company2;
  }

  graphtype: any = ['line', 'bar'];

  constructor(public fb: FormBuilder, private exportService: ExportService) { }

  graphtypeForm = this.fb.group({
    name: [''],
    number:[]
  })

  onSubmit() {
    this.charttype = this.graphtypeForm.value.name;
    this.chartnumber = this.graphtypeForm.value.number;
    if(this.chartnumber==1){
      this.chart2= [];
      console.log(this.chart2);
      this.createSingleChart();
    }
    else{
      this.createTwoChart();
    }
    
  }


  ngOnInit()

  {
    this.fillVar();
    this.createSingleChart();
  }


  createSingleChart() {
    this.chart1 = new Chart('chart1', {
      type: this.charttype,
      data: {
        labels: this.xlabels1,
        datasets: [
          {
            label: this.label1,
            fill: false,
            //fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "red",
            pointColor: "red",
            pointStrokeColor: "#fff",
            //pointHighlightFill: "#fff",
            //pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.data1,
            lineTension:0.2,
            borderColor:"red",
            borderWidth: 1
          },
          {
            label: this.label2,
            fill: false,
            //fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "green",
            pointColor: "green",
            pointStrokeColor: "#fff",
            //pointHighlightFill: "#fff",
            //pointHighlightStroke: "rgba(151,187,205,1)",
            data: this.data2,
            lineTension:0.2,
            borderColor:"green",
            borderWidth: 1
          }
        ]   
      }, 
      options: {
        title:{
          text:"Comparison Charts",
          display:true
        },
        scales: {
          yAxes: [{
          ticks: {
              beginAtZero:true
          }
          }]
        }
      }
    });
  }

  createTwoChart() {
    this.chart1 = new Chart('chart1', {
      type: this.charttype,
      data: {
        labels: this.xlabels1,
        datasets: [
          {
            label: this.label1,
            fill: false,
            //fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "red",
            pointColor: "red",
            pointStrokeColor: "#fff",
            //pointHighlightFill: "#fff",
            //pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.data1,
            lineTension:0.2,
            borderColor:"red",
            borderWidth: 1
          },
        ]   
      }, 
      options: {
        title:{
          text:"Company comparison",
          display:true
        },
        scales: {
          yAxes: [{
          ticks: {
              beginAtZero:true
          }
          }]
        }
      }
    });
    this.chart2 = new Chart('chart2', {
      type: this.charttype,
      data: {
        labels: this.xlabels2,
        datasets: [
          {
            label: this.label2,
            fill: false,
            //fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "green",
            pointColor: "green",
            pointStrokeColor: "#fff",
            //pointHighlightFill: "#fff",
            //pointHighlightStroke: "rgba(151,187,205,1)",
            data: this.data2,
            lineTension:0.2,
            borderColor:"green",
            borderWidth: 1
          }
        ]   
      }, 
      options: {
        title:{
          text:"Company comparison",
          display:true
        },
        scales: {
          yAxes: [{
          ticks: {
              beginAtZero:true
          }
          }]
        }
      }
    });
  }


  private fillVar() 
  {
    // console.log(this.responses);
    for (var i=0;i<this.responses1.length;i++) {
        this.data1.push(this.responses1[i].currentPrice);
        this.data2.push(this.responses2[i].currentPrice);
        this.avg1+= this.responses1[i].currentPrice;
        this.avg2+= this.responses2[i].currentPrice;
        this.xlabels1.push(this.responses1[i].date);
        this.xlabels2.push(this.responses2[i].date);
    }
    this.avg1= this.avg1/this.data1.length;
    this.avg2= this.avg2/this.data2.length;

    // for(let s of this.s1){
    //   this.xlabels1.push(s);
    // }
    
  }

  export() {
    this.exportService.exportExcel(this.responses1, 'Datasheet_'+this.label1);
    this.exportService.exportExcel(this.responses2, 'Datasheet_'+this.label1);

  }

}
