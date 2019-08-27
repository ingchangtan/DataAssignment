import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import data from '../../raw'

interface imageMonths {
  image: string
  month: string
  tag:[]
}

@Component({
  selector: 'app-likes-tag-bar',
  templateUrl: './likes-tag-bar.component.html',
  styleUrls: ['./likes-tag-bar.component.css']
})
export class LikesTagBarComponent implements OnInit {
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [];

  constructor() { }


  ngOnInit() {
  
    const imageData = data
    

    let count = {}
    for(const x of imageData){
      var dateAdd = new Date (x.dateAdded)
      const monthadded = dateAdd.getMonth()
      
      for( const tags of x.tags){
        if (count[monthadded]) {
          if (count[monthadded][tags]){
            // if movie already checked, increment by 1
            count[monthadded][tags] += x.likes
          } else {
            // if movie not yet checked, set to 1
            count[monthadded][tags]= x.likes
          }
        } else{
          count[monthadded] = {}
          count[monthadded][tags]= x.likes
        }
      
    }
  }
    console.log(count)

    let likesTagCount = {}

    for(const monthadded in count){
      this.barChartLabels.push(monthadded)
      for(let tags in count[monthadded]){
        if (likesTagCount){
          if(likesTagCount[tags]){
            likesTagCount[tags] = []
            likesTagCount[tags] = count[monthadded][tags]
          } else {
            likesTagCount[tags] = []
             likesTagCount[tags].push(count[monthadded][tags])
            
          }
        }
        else {
          likesTagCount[tags] = []
          likesTagCount[tags] = count[monthadded][tags]
        }
        
    }
  }
 
    console.log(likesTagCount)

    for(let likes in likesTagCount){
      this.barChartData.push(
        {data: likesTagCount[likes], label: likes}
      )
    }


  }
}