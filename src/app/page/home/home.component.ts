import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit,AfterViewInit {

  @ViewChild('barCanvas') private barCanvas : ElementRef;
  
  barChart:any;

  constructor() { }

  ngOnInit() {
    Chart.register(...registerables);
  }

  


  ngAfterViewInit() {

    this.barChartMethod();

  }



  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
        datasets: [{
          label: '# of Votes',
          data: [20, 30, 40, 60, 20, 5],
           backgroundColor: 'rgba(255,99,132,0.2)',
          //   'rgba(255, 99, 132, 0.2)',
          //   'rgba(54, 162, 235, 0.2)',
          //   'rgba(255, 206, 86, 0.2)',
          //   'rgba(75, 192, 192, 0.2)',
          //   'rgba(153, 102, 255, 0.2)',
          // //   'rgba(255, 159, 64, 0.2)'
          // ],
           borderColor:'rgba(255,99,132,1)',
          //   'rgba(54, 162, 235, 1)',
          //   'rgba(255, 206, 86, 1)',
          //   'rgba(75, 192, 192, 1)',
          //   'rgba(153, 102, 255, 1)',
          //   'rgba(255, 159, 64, 1)'
          // ],
          borderWidth: 1,
        },{label: '# of Votes',
        data: [40, 100, 235, 20, 132, 90],
         backgroundColor: 'rgba(255,99,132,0.2)',
        //   'rgba(255, 99, 132, 0.2)',
        //   'rgba(54, 162, 235, 0.2)',
        //   'rgba(255, 206, 86, 0.2)',
        //   'rgba(75, 192, 192, 0.2)',
        //   'rgba(153, 102, 255, 0.2)',
        // //   'rgba(255, 159, 64, 0.2)'
        // ],
         borderColor:'rgba(255,99,132,1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)'
        // ],
        borderWidth: 1,

        },
      {label: '# of Votes',
      data: [20, 30, 40, 60, 20, 5],
       backgroundColor: 'rgba(255,99,132,0.2)',
      //   'rgba(255, 99, 132, 0.2)',
      //   'rgba(54, 162, 235, 0.2)',
      //   'rgba(255, 206, 86, 0.2)',
      //   'rgba(75, 192, 192, 0.2)',
      //   'rgba(153, 102, 255, 0.2)',
      // //   'rgba(255, 159, 64, 0.2)'
      // ],
       borderColor:'rgba(255,99,132,1)',
      //   'rgba(54, 162, 235, 1)',
      //   'rgba(255, 206, 86, 1)',
      //   'rgba(75, 192, 192, 1)',
      //   'rgba(153, 102, 255, 1)',
      //   'rgba(255, 159, 64, 1)'
      // ],
      borderWidth: 1}]
      },
      options: {
       maintainAspectRatio:false,
      }
    });
  }

}

