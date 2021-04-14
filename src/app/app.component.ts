import { Component } from '@angular/core';
import { FibonacciService } from './fibonacci/fibonacci.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular-with-express';
  
  constructor (private fiboService: FibonacciService) {}

  hasResults = this.fiboService.fibonacciData!=null? true : false
}
