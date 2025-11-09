
import { isPlatformBrowser } from '@angular/common';import {
  Component,
  AfterViewInit,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  PLATFORM_ID, Inject
} from '@angular/core';
import { Router } from '@angular/router';
// import Chart from 'chart.js/auto';
import { Chart, ChartConfiguration, ChartItem } from 'chart.js/auto';
import {HeaderService} from "../header/header.service";


@Component({
  selector: 'app-dashboard',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush, // Even if using OnPush
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard  implements AfterViewInit{
  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart?: Chart;
  constructor(private headerService: HeaderService, private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}
  ngOnInit() {
    this.headerService.setTitle('OVERVIEW');
  }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.createChart(), 0);
    }
  }
  private createChart(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    // Destroy existing chart if re-creating
    if (this.chart) {
      this.chart.destroy();
    }
    // Ensure canvas is available
    if (!this.chartCanvas?.nativeElement) {
      console.error('Canvas element not found!');
      return;
    }
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) {
      console.error('Failed to get 2D context');
      return;
    }
    const MAX = 500;
    const used = [120, 250, 380, 420, 480, 200];
    const unused = used.map(v => MAX - v);

    const config: ChartConfiguration = {
          type: 'bar',                              // ← BAR CHART
          data: {
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
            datasets: [
              {
                label: 'Used',
                data: used, //[150, 320, 450, 400, 500, 450],
                backgroundColor: '#4a54ae',
                borderColor: '#4a54ae',
                borderWidth: 1,
                barThickness: 12,           // EXACT SAME
                categoryPercentage: 1,
                //barPercentagentage: 1.0,
                borderRadius: { topLeft: 9, topRight: 9 , bottomRight:9, bottomLeft:9}
            },
              {
                label: 'Unused',
                data: unused, //[500, 500, 500, 500, 500, 500],
                backgroundColor: '#e0e0e0',  // Light gray
                borderColor: '#e0e0e0',
                borderWidth: 1,
                barThickness: 12,           // SAME width
                categoryPercentage: 1,    // Less space between groups
                // barPercentage: 1.0,
                borderRadius: { topLeft: 9, topRight: 9 }
              }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: { display: false },
            },
            scales: {
              x: {
                stacked: true,
                border: { display: false },
                grid: {
                  display: false,    // ← Remove vertical grid lines
                },
                ticks: {
                  padding: 1,
                  font: {
                    size: 14
                  },
                  color: '#4a54ae',
                }
              },
              y: {
                stacked: true,
                border: { display: false },
                beginAtZero: false,
                grid: {
                  display: false,    // ← Remove horizontal grid lines
                },
                min: 100,            // Start at 100
                max: MAX,            // End at 500
                ticks: {
                  padding: 1,
                  stepSize: 100,
                  font: {
                    size: 14   // ← X-axis (horizontal) label font size
                  },
                  color: '#4a54ae',
                  callback: (value) => value + '$' // Optional: format
                },
              }
            }
          }
    };

    // Pass the canvas element (not ctx directly unless using older API)
    new Chart(this.chartCanvas.nativeElement as ChartItem, config);
    // If OnPush, force CD
    this.cdr.markForCheck();
  }

  goToSubscription(type:string) {
    this.router.navigate(['/student-subscription'],{
      queryParams: { subscriptionType: type }
    });
  }
  ngOnDestroy(): void {
    this.chart?.destroy();
  }
}
