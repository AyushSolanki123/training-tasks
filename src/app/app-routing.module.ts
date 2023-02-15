import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day1Component } from './component/day1/day1.component';
import { Day2Component } from './component/day2/day2.component';
import { Day1Task1Component } from './component/day1/day1-task1/day1-task1.component';
import { Day1Task2Component } from './component/day1/day1-task2/day1-task2.component';
import { Day2Task1Component } from './component/day2/day2-task1/day2-task1.component';
import { Day2Task2Component } from './component/day2/day2-task2/day2-task2.component';
import { Day3Component } from './component/day3/day3.component';
import { Day3Task1Component } from './component/day3/day3-task1/day3-task1.component';
import { Day3Task2Component } from './component/day3/day3-task2/day3-task2.component';
import { Day3Task3Component } from './component/day3/day3-task3/day3-task3.component';
import { Day4Component } from './component/day4/day4.component';
import { Day4Task1Component } from './component/day4/day4-task1/day4-task1.component';
import { Day4Task2Component } from './component/day4/day4-task2/day4-task2.component';
import { Day4Task3Component } from './component/day4/day4-task3/day4-task3.component';
import { Day5Component } from './component/day5/day5.component';
import { Day5Task1Component } from './component/day5/day5-task1/day5-task1.component';
import { HomeComponent } from './component/home/home.component';

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
    path: 'day3',
    children: [
      { path: '', component: Day3Component },
      { path: 'task1', component: Day3Task1Component },
      { path: 'task2', component: Day3Task2Component },
      { path: 'task3', component: Day3Task3Component },
    ],
  },
  {
    path: 'day4',
    children: [
      { path: '', component: Day4Component },
      { path: 'task1', component: Day4Task1Component },
      { path: 'task2', component: Day4Task2Component },
      { path: 'task3', component: Day4Task3Component },
    ],
  },
  {
    path: 'day5',
    children: [
      { path: '', component: Day5Component },
      { path: 'task1', component: Day5Task1Component },
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
