import { Component } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  title = '';

  constructor(private headerService: HeaderService) {
    this.headerService.title$.subscribe(title => {
      if(title == "month") {title = "Student Subscription<br>Month";}
      if(title == "sixMonth") {title = `Student Subscription<br>6-Month`;}
      if(title == "yearly") {title = "Student Subscription<br>Yearly";}
      this.title = title;
    });
  }
}
