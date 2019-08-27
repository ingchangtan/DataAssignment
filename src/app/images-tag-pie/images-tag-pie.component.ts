import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import data from '../../raw'


interface imageTags {
  image: string
  tags: []
}

@Component({
  selector: 'app-images-tag-pie',
  templateUrl: './images-tag-pie.component.html',
  styleUrls: ['./images-tag-pie.component.css']
})
export class ImagesTagPieComponent implements OnInit {
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(155, 191, 224)', 'rgba(232, 160, 154)','rgba(255, 193, 84)', 'rgba(198, 214, 143)', 'rgba(71, 179, 156)', 'rgba(236, 107, 86)'],
    },
  ];

  constructor() { }

 
  ngOnInit() {
    const imageData = data
    

    let count = {}
    for(const x of imageData){
      
      for( const name of x.tags){
        if (count[name]) {
          // if movie already checked, increment by 1
          count[name] += 1
        } else {
          // if movie not yet checked, set to 1
          count[name] = 1
        }
      }
    }

    console.log(count)
    for (const key in count) {
      this.pieChartLabels.push(key)
      const numTags = count[key]
      this.pieChartData.push(numTags)
    }

  }
}
