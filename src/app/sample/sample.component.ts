import { Component, OnInit } from '@angular/core';
import { FibonacciService } from '../fibonacci/fibonacci.service';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent implements OnInit {

  sample
  simple
  
  constructor(private service: SampleService) { }

  ngOnInit(): void {
    this.service.getSampleData().subscribe((data)=>this.sample=data)
    this.service.getSimpleSampleData().subscribe((data)=>this.simple=data)
  }

}
