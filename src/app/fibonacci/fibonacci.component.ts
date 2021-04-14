import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FibonacciService } from './fibonacci.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {

  data // from express
  fibonacciForm: FormGroup
  submitted: boolean = false
  dogs

  constructor(
    private service: FibonacciService, 
    private fb: FormBuilder, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getData().subscribe(data=>this.data=data)

    this.fibonacciForm = this.fb.group({
      x: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      y: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      submitMethod: ['POST']
    })

    this.getDogs()
  }

  get x() {
    return this.fibonacciForm.get('x')
  }

  get y() {
    return this.fibonacciForm.get('y')
  }

  get submitMethod() {
    return this.fibonacciForm.get('submitMethod')
  }

  fibonacciFormSubmit() {
    this.submitted = true

    // GET
    if (this.submitMethod.value == 'GET') {
      this.service.submitMethod = 'GET'
      // pass the values as query params
      this.router.navigate(['fibonacci/calculate'], {
        queryParams: {
          x: this.x.value,
          y: this.y.value
        }
      })
    }

    // POST
    else if (this.submitMethod.value == 'POST') {
      this.service.submitMethod = 'POST'
      this.router.navigate(['fibonacci/calculate'])

      // created my own service to pass the values to another component and be called later
      this.service.setData({
        x: this.x.value,
        y: this.y.value
      })
    }
  }

  getDogs() {
    this.service.getDogsAPI().subscribe(dogs=>{
      this.dogs=dogs
      this.dogs=this.dogs.message
    })
  }

}
