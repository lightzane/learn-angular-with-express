import { Component, OnInit } from '@angular/core';
import { FibonacciService } from '../fibonacci.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-fibonacci-calculator-results',
  templateUrl: './fibonacci-calculator-results.component.html',
  styleUrls: ['./fibonacci-calculator-results.component.css']
})
export class FibonacciCalculatorResultsComponent implements OnInit {

  POSTsequence
  GETsequence

  constructor(
    private service: FibonacciService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // init POST response
    if (this.service.submitMethod=='POST') {
      // POST data are already stored in the services
      let fibonacciData = this.service.fibonacciData
      this.service.calculateSequenceUsingPOST(fibonacciData).subscribe( data => {
        this.POSTsequence = data
      })
    }
    
    // init GET response
    else if (this.service.submitMethod=='GET') {
      // GET data are already stored in the query string
      this.route.queryParamMap.subscribe(data=>{      
        if (data) {
          
          let fibonacciData = {
            x:data.get('x'),
            y:data.get('y')
          }

          this.service.calculateSequenceUsingGET(fibonacciData).subscribe(data => {
            this.GETsequence=data
          })
        }
      })

    }
  }

}
