import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface FibonacciData {
  x: string,
  y: string
}

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  private _fibonacciData: FibonacciData = null
  submitMethod: string = 'GET'

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('/api/fibonacci')
  }

  calculateSequenceUsingPOST(data: {x:string,y:string}): Observable<number> {    
    return this.http.post<number>('/api/post-calculate-sequence', data)
    // .subscribe() is important to actually POST or submit the form to the server
    // .subscribe() can be used later in other component.
    // in this case, the fibonacci-calculator-results.component.ts
  }

  calculateSequenceUsingGET(data: {x:string,y:string}): Observable<number> {
    return this.http.get<number>('/api/get-calculate-sequence', {
      params: data
    })
    // return this.http.get<number>('/api/calculate-sequence?x=1&&y=3')

  }

  setData(data: FibonacciData) {
    this._fibonacciData = data
  }

  get fibonacciData() {
    return this._fibonacciData
  }

  getDogsAPI() {
    return this.http.get('https://dog.ceo/api/breeds/image/random/10')
  }

}
