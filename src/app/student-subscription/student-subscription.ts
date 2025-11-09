import { Component, OnInit } from '@angular/core';
import {HeaderService} from "../header/header.service";
import {ActivatedRoute, Router} from "@angular/router";

interface SubscriptionData {
  students: number;
  month: string;
  startDate: string;
  endDate: string;
}
@Component({
  selector: 'app-student-subscription',
  standalone: false,
  templateUrl: './student-subscription.html',
  styleUrl: './student-subscription.scss',
})
export class StudentSubscription {
  constructor(private headerService: HeaderService, private route: ActivatedRoute, private router: Router) {}
  subscriptionType:any;
  activeTab: string = 'month';
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.subscriptionType = params.get('subscriptionType') || '';
      this.activeTab = this.subscriptionType;
      this.headerService.setTitle(this.subscriptionType);
    });
  }
  changeHeaderTitle(activeTab:any){
    this.activeTab = activeTab;
    this.headerService.setTitle(this.activeTab);
  }
  monthData: SubscriptionData[] = [
    { students: 10, month: 'April', startDate: '02/04/2024', endDate: '02/05/2024' },
    { students: 20, month: 'May', startDate: '02/05/2024', endDate: '02/06/2024' },
    { students: 0, month: 'June', startDate: '-', endDate: '-' },
    { students: 100, month: 'July', startDate: '02/07/2024', endDate: '02/08/2024' }
  ];

  sixMonthData: SubscriptionData[] = [
    { students: 15, month: 'April', startDate: '02/04/2024', endDate: '02/10/2024' },
    { students: 25, month: 'May', startDate: '02/05/2024', endDate: '02/11/2024' },
    { students: 0, month: 'June', startDate: '-', endDate: '-' },
    { students: 80, month: 'July', startDate: '02/07/2024', endDate: '02/01/2025' }
  ];

  yearlyData: SubscriptionData[] = [
    { students: 30, month: 'April', startDate: '02/04/2024', endDate: '02/04/2025' },
    { students: 45, month: 'May', startDate: '02/05/2024', endDate: '02/05/2025' },
    { students: 0, month: 'June', startDate: '-', endDate: '-' },
    { students: 120, month: 'July', startDate: '02/07/2024', endDate: '02/07/2025' }
  ];
}
