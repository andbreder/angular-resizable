import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './modules/routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashOneComponent } from './components/dash-one/dash-one.component';
import { AngularSplitModule } from 'angular-split';
import { DashTwoComponent } from './components/dash-two/dash-two.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragItem1Component } from './components/templates/drag-item1/drag-item1.component';
import { DragItem2Component } from './components/templates/drag-item2/drag-item2.component';
import { DragItem3Component } from './components/templates/drag-item3/drag-item3.component';
import { DragItem4Component } from './components/templates/drag-item4/drag-item4.component';
import { DashThreeComponent } from './components/dash-three/dash-three.component';
import { DashFourComponent } from './components/dash-four/dash-four.component';
import { Chart1Component } from './components/charts/chart1/chart1.component';
import { Chart2Component } from './components/charts/chart2/chart2.component';
import { Chart3Component } from './components/charts/chart3/chart3.component';
import { Chart4Component } from './components/charts/chart4/chart4.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    AppComponent,
    DashOneComponent,
    DashTwoComponent,
    DragItem1Component,
    DragItem2Component,
    DragItem3Component,
    DragItem4Component,
    DashThreeComponent,
    DashFourComponent,
    Chart1Component,
    Chart2Component,
    Chart3Component,
    Chart4Component
  ],
  imports: [
    AngularSplitModule,
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    NgApexchartsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
