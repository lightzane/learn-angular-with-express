import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Sample } from './sample' // interface
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }

  getSampleData(): Observable<Sample> {
    return this.http.get<Sample>('/api') // see proxy.conf.json (redirects to Express route during dev build)
  }

  // or simply (no intellisense)
  getSimpleSampleData() {
    return this.http.get('/api') // see proxy.conf.json (redirects to Express route during dev build)
  }

}
