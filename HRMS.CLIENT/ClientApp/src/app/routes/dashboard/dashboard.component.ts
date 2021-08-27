import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  NgZone,
  ViewChild,
} from '@angular/core';
import { stat } from 'fs';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';

import { DashboardService } from './dashboard.srevice';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      .mat-raised-button {
        margin-right: 8px;
        margin-top: 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DashboardService],
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  mStats = [
    {
      title: 'Total Sales',
      amount: 0,
      progress: {
        value: 100,
      },
      color: 'bg-indigo-500',
    },
    {
      title: 'Revenue',
      amount: 0,
      progress: {
        value: 0,
      },
      color: 'bg-blue-500',
    },
    {
      title: 'Due',
      amount: 0,
      progress: {
        value: 0,
      },
      color: 'bg-teal-500',
    },
    {
      title: 'Paid',
      amount: 0,
      progress: {
        value: 0,
      },
      color: 'bg-green-500',
    },
  ];

  wStats = [
    {
      title: 'Total Sales',
      amount: 0,
      progress: {
        value: 100,
      },
      color: 'bg-indigo-500',
    },
    {
      title: 'Revenue',
      amount: 0,
      progress: {
        value: 0,
      },
      color: 'bg-blue-500',
    },
    {
      title: 'Due',
      amount: 0,
      progress: {
        value: 0,
      },
      color: 'bg-teal-500',
    },
    {
      title: 'Paid',
      amount: 0,
      progress: {
        value: 0,
      },
      color: 'bg-green-500',
    },
  ];

  @ViewChild("chart") chart: ChartComponent;

  public chartOptions_ySales: Partial<ChartOptions>;
  public chartOptions_wSales: Partial<ChartOptions>;
  public chartOptions_yProfit: Partial<ChartOptions>;
  public chartOptions_wProfit: Partial<ChartOptions>;

  constructor(
    private cdRef: ChangeDetectorRef,
    private dashboardSrv: DashboardService
  ) {
    this.chartOptions_ySales = {
      series: [
        {
          name: "besic",
          data: []
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      dataLabels: {
        enabled: true
      },
      xaxis: {
        categories: []
      },
      title: {
        text: "Sales of last 12 month"
      }
    };

    this.chartOptions_wSales = {
      series: [
        {
          name: "besic",
          data: []
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: true
      },
      xaxis: {
        categories: []
      },
      title: {
        text: "Sales of last 7 days"
      }
    };

    this.chartOptions_yProfit = {
      series: [
        {
          name: "besic",
          data: []
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      dataLabels: {
        enabled: true
      },
      xaxis: {
        categories: []
      },
      title: {
        text: "Profit of last 12 months"
      }
    };

    this.chartOptions_wProfit = {
      series: [
        {
          name: "besic",
          data: []
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: true
      },
      xaxis: {
        categories: []
      },
      title: {
        text: "Profit of last 12 months"
      }
    };

  }

  ngOnInit() {
    this.dashboardSrv.getDashboard_one().subscribe(res=>{
      const mTotal = res.mData.totalTotal;
      const mProfit = res.mData.totalProfit;
      const mDue = res.mData.totalDue;
      const mPaid = res.mData.totalPaid;
      this.mStats[0].amount = mTotal;
      this.mStats[1].amount = mProfit;
      this.mStats[1].progress.value = (mProfit/mTotal)*100;
      this.mStats[2].amount = mDue;
      this.mStats[2].progress.value = (mDue/mTotal)*100;
      this.mStats[3].amount = mPaid;
      this.mStats[3].progress.value = (mPaid/mTotal)*100;

      const wTotal = res.wData.totalTotal;
      const wProfit = res.wData.totalProfit;
      const wDue = res.wData.totalDue;
      const wPaid = res.wData.totalPaid;
      this.wStats[0].amount = wTotal;
      this.wStats[1].amount = wProfit;
      this.wStats[1].progress.value = (wProfit/wTotal)*100;
      this.wStats[2].amount = wDue;
      this.wStats[2].progress.value = (wDue/wTotal)*100;
      this.wStats[3].amount = wPaid;
      this.wStats[3].progress.value = (wPaid/wTotal)*100;
      this.cdRef.detectChanges();
    })

  }

  ngAfterViewInit() {
    this.dashboardSrv.getDashBoard_two().subscribe(res=>{

      for(let i=res.ySales.length-1; i >= 0; i--){
        this.chartOptions_ySales.series[0].data.push(res.ySales[i].total);
        this.chartOptions_ySales.xaxis.categories.push(res.ySales[i].month+'-'+res.ySales[i].year);
      }

      for(let i=res.wSales.length-1; i >= 0; i--){
        this.chartOptions_wSales.series[0].data.push(res.wSales[i].total);
        this.chartOptions_wSales.xaxis.categories.push(res.wSales[i].date);
      }

      for(let i=res.yProfit.length-1; i >= 0; i--){
        this.chartOptions_yProfit.series[0].data.push(res.yProfit[i].total);
        this.chartOptions_yProfit.xaxis.categories.push(res.yProfit[i].month+'-'+res.yProfit[i].year);
      }


      let data=[];
      let date=[];

      for(let i=res.wProfit.length-1; i >= 0; i--){
        data.push(res.wProfit[i].total);
        date.push(res.wProfit[i].date);
      }
      this.chartOptions_ySales.series[0].data=data;
      this.chartOptions_ySales.xaxis.categories=date;

      this.cdRef.detectChanges();
    })
  }

  ngOnDestroy() {

  }

  initChart() {
  }
}
