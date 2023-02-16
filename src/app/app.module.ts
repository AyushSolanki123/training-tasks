import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { PasswordCheckDirective } from './component/day2/day2-task2/password-check.directive';
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
import { ListTaskItemsComponent } from './component/list-task-items/list-task-items.component';
import { ConfirmPasswordCheckDirective } from './component/day2/day2-task2/confirm-password-check.directive';
import { CourseListComponent } from './component/day4/day4-task1/course-list/course-list.component';
import { ListComponent } from './component/day4/day4-task2/list/list.component';
import { ChildComponent } from './component/day4/day4-task3/child/child.component';
import { Day5Task2Component } from './component/day5/day5-task2/day5-task2.component';
import { DemoComponent } from './component/day5/day5-task1/demo/demo.component';

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
    PasswordCheckDirective,
    Day3Component,
    Day3Task1Component,
    Day3Task2Component,
    Day3Task3Component,
    Day4Component,
    Day4Task1Component,
    Day4Task2Component,
    Day4Task3Component,
    Day5Component,
    Day5Task1Component,
    ListTaskItemsComponent,
    ConfirmPasswordCheckDirective,
    CourseListComponent,
    ListComponent,
    ChildComponent,
    Day5Task2Component,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
