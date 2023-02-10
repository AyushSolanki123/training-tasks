import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { DayCardComponent } from './component/day-card/day-card.component';
import { Day1Component } from './component/day1/day1.component';
import { Day2Component } from './component/day2/day2.component';
import { Day1Task1Component } from './component/day1/day1-task1/day1-task1.component';
import { Day1Task2Component } from './component/day1/day1-task2/day1-task2.component';
import { Day2Task1Component } from './component/day2/day2-task1/day2-task1.component';
import { Day2Task2Component } from './component/day2/day2-task2/day2-task2.component';
import { TaskItemComponent } from './component/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Day1Component,
    Day2Component,
    Day1Task1Component,
    Day1Task2Component,
    Day2Task1Component,
    Day2Task2Component,
    DayCardComponent,
    TaskItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
