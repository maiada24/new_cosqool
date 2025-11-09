import { Component, Input } from '@angular/core';

interface Row {
  students: number;
  month: string;
  startDate: string;
  endDate: string;
  isZero?: boolean;
}

@Component({
  selector: 'app-subscription-table',
  standalone: false,
  templateUrl: './subscription-table.html',
  styleUrls: ['./subscription-table.scss','../student-subscription/student-subscription.scss']
})
export class SubscriptionTable {
  @Input() data: Row[] = [];

  getTotal() {
    return this.data.reduce((sum, sub) => sum + sub.students, 0);
  }
}
