import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SampleComponent } from './sample/sample.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';

import { HttpClientModule } from '@angular/common/http';

/**
 * for client prod build
 * workaround for the URL routing
 * then provide the following 2 items below to ngModule
 */
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { FibonacciCalculatorResultsComponent } from './fibonacci/fibonacci-calculator-results/fibonacci-calculator-results.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SampleComponent,
    FibonacciComponent,
    FibonacciCalculatorResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      /**
       * changes to `localhost:4200/#/home`
       * which works perfectly fine with express
       * to determine whether that path entered in the browser address...
       * is an Angular Router or an Express Router
       */
      useClass: HashLocationStrategy 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
