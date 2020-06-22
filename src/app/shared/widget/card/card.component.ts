import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_stock from 'highcharts/modules/stock';


@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: {} 

  ngOnInit(): void { 
    this.chartOptions = {
    chart: {
        type: 'area'
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    tooltip: {
        split: true,
        valueSuffix: ' millions'
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    series: [{
      data: [ 71, 78, 39, 66 ]
    }]
}  

  HC_stock(Highcharts)

  setTimeout(()=>{
    window.dispatchEvent( new Event('rezise') )
  },3000)
    
  }


}
