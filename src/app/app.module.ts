import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

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
import { Day6Component } from './component/day6/day6.component';
import { Day6Task1Component } from './component/day6/day6-task1/day6-task1.component';
import { Day6Task2Component } from './component/day6/day6-task2/day6-task2.component';
import { reducers } from './component/day6/store';
import { ProductEffects } from './component/day6/store/effects/product.effects';
import { Day6Task3Component } from './component/day6/day6-task3/day6-task3.component';
import { Day7Component } from './component/day7/day7.component';
import { Day7Task1Component } from './component/day7/day7-task1/day7-task1.component';
import { Day7Task2Component } from './component/day7/day7-task2/day7-task2.component';
import { TestingComponent } from './component/testing/testing.component';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('previous state:', state);
    console.log('action: ', action);
    const nextState = reducer(state, action);
    console.log('current state: ', state);
    return nextState;
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

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
    Day6Component,
    Day6Task1Component,
    Day6Task2Component,
    Day6Task3Component,
    Day7Component,
    Day7Task1Component,
    Day7Task2Component,
    TestingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([ProductEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
