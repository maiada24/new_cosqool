import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard  implements AfterViewInit{
  constructor(private cdr: ChangeDetectorRef) {}
  ngAfterViewInit(): void {
    new Chart('barCanvas', {
      type: 'bar',                              // ← BAR CHART
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Sales 2025',
          data: [12, 19, 15, 25, 22, 30],
          backgroundColor: [
            '#0d6efd', // Bootstrap primary
            '#198754', // success
            '#ffc107', // warning
            '#dc3545', // danger
            '#0dcaf0', // info
            '#6f42c1'  // purple
          ],
          borderColor: '#fff',
          borderWidth: 2,
          borderRadius: 8,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' as const },
          title: { display: true, text: 'Monthly Revenue' }
        },
        scales: {
          y: { beginAtZero: true, ticks: { callback: v => '$' + v + 'k' } }
        }
      }
    });
  }
}
