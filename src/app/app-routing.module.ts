import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { Day1Component } from './component/day1/day1.component';
import { Day2Component } from './component/day2/day2.component';
import { Day1Task1Component } from './component/day1/day1-task1/day1-task1.component';
import { Day1Task2Component } from './component/day1/day1-task2/day1-task2.component';
import { Day2Task1Component } from './component/day2/day2-task1/day2-task1.component';
import { Day2Task2Component } from './component/day2/day2-task2/day2-task2.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'day1',
    children: [
      { path: '', component: Day1Component },
      { path: 'task1', component: Day1Task1Component },
      { path: 'task2', component: Day1Task2Component },
    ],
  },
  {
    path: 'day2',
    children: [
      { path: '', component: Day2Component },
      { path: 'task1', component: Day2Task1Component },
      { path: 'task2', component: Day2Task2Component },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
