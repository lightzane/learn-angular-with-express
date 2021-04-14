import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FibonacciCalculatorResultsComponent } from './fibonacci/fibonacci-calculator-results/fibonacci-calculator-results.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'sample', component: SampleComponent },
  { path: 'fibonacci', component: FibonacciComponent },
  { path: 'fibonacci/calculate', component: FibonacciCalculatorResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
