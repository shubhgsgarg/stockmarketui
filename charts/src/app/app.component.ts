import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Stock Exchange';
  LineChart=[];

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
          "companyCode": 1002,
          "stockExchange": "nsc",
          "currentPrice": 70.7,
          "date": "2020-01-28",
          "time": "12:15:00"
      },
      {
          "companyStockPriceId": 2,
          "companyCode": 1002,
          "stockExchange": "nsc",
          "currentPrice": 20.7,
          "date": "2020-02-28",
          "time": "12:15:00"
      },
      {
          "companyStockPriceId": 3,
          "companyCode": 1002,
          "stockExchange": "nsc",
          "currentPrice": 45.7,
          "date": "2020-03-03",
          "time": "12:15:00"
      },
      {
        "companyStockPriceId": 1,
        "companyCode": 1002,
        "stockExchange": "nsc",
        "currentPrice": 70.7,
        "date": "2020-04-28",
        "time": "12:15:00"
    },
    {
        "companyStockPriceId": 2,
        "companyCode": 1002,
        "stockExchange": "nsc",
        "currentPrice": 20.7,
        "date": "2020-05-28",
        "time": "12:15:00"
    },
    {
        "companyStockPriceId": 3,
        "companyCode": 1002,
        "stockExchange": "nsc",
        "currentPrice": 45.7,
        "date": "2020-06-03",
        "time": "12:15:00"
    }
  ]
  labels = [];
  private data1 = []; 
  data2 = [];
  label1 ="First company/sector";
  label2 ="Second company/sector";
  s1 = new Set();
  charttype="line";



//  <button (click)="getData()">Fetch Data</button>

  setResponse( res1, res2, company1,company2)
  {
    this.responses1 = res1;
    this.responses2 = res2;
    this.label1 = company1;
    this.label2 = company2;
  }

  graphtype: any = ['line', 'bar']

  constructor(public fb: FormBuilder) { }

  graphtypeForm = this.fb.group({
    name: ['']
  })

  onSubmit() {
    this.charttype = this.graphtypeForm.value;
    this. createChart();
  }


  ngOnInit()

  {
    this.fillVar();

    this. createChart();


  }
  createChart() {
    this.LineChart = new Chart('lineChart', {

      type: this.charttype,

      data: {

        labels: this.labels,

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
        this.s1.add(this.responses1[i].date);
    }
    

    for(let s of this.s1){
      this.labels.push(s);
    }
    
  }



}
