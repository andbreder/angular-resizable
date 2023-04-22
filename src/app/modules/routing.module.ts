import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashOneComponent } from '../components/dash-one/dash-one.component';
import { DashTwoComponent } from '../components/dash-two/dash-two.component';
import { DashThreeComponent } from '../components/dash-three/dash-three.component';
import { DashFourComponent } from '../components/dash-four/dash-four.component';

const routes: Routes = [
  { path: 'dash-one', component: DashOneComponent },
  { path: 'dash-two', component: DashTwoComponent },
  { path: 'dash-three', component: DashThreeComponent },
  { path: 'dash-four', component: DashFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
