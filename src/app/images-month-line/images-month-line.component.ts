import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import data from '../../raw'


interface imageMonths {
  image: string
  month: string
}

@Component({
  selector: 'app-images-month-line',
  templateUrl: './images-month-line.component.html',
  styleUrls: ['./images-month-line.component.css']
})
export class ImagesMonthLineComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Series 1' }

  ];
  
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
       
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  // public lineChartColors: Color[] = [
  //   { // grey
  //     backgroundColor: 'rgba(148,159,177,0.2)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   },
  //   { // dark grey
  //     backgroundColor: 'rgba(77,83,96,0.2)',
  //     borderColor: 'rgba(77,83,96,1)',
  //     pointBackgroundColor: 'rgba(77,83,96,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(77,83,96,1)'
  //   },
  //   { // red
  //     backgroundColor: 'rgba(255,0,0,0.3)',
  //     borderColor: 'red',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   }
  // ];
  public lineChartLegend = true;
  public lineChartType = 'line';


  constructor() { }

  ngOnInit() {
    const imageData = data
    

    let count = {}
    for(const x of imageData){
      let dateAdd = new Date (x.dateAdded)
      const monthadded = dateAdd.getMonth()
      
      
        if (count[monthadded]) {
          // if movie already checked, increment by 1
          count[monthadded] += 1
        } else {
          // if movie not yet checked, set to 1
          count[monthadded]= 1
        }
      
    }
    console.log(count)
    for (const key in count) {
      this.lineChartLabels.push(key)
      const numTags = count[key]
      this.lineChartData[0].data.push(numTags)
    }

  }

}
