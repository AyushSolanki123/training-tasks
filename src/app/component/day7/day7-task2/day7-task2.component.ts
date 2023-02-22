import { group } from '@angular/animations';
import { Component } from '@angular/core';
import {
  Observable,
  filter,
  from,
  groupBy,
  map,
  max,
  mergeMap,
  of,
  reduce,
  toArray,
} from 'rxjs';

interface Candidate {
  name: string;
  technology: string;
  city: string;
  experience: number;
}

@Component({
  selector: 'app-day7-task2',
  templateUrl: './day7-task2.component.html',
  styleUrls: ['./day7-task2.component.scss'],
})
export class Day7Task2Component {
  candidates: Candidate[] = [
    { name: 'Ramesh', technology: 'Java', city: 'Pune', experience: 5 },
    { name: 'Ram', technology: 'Angular', city: 'Mumbai', experience: 3 },
    { name: 'Raj', technology: 'React', city: 'Banglore', experience: 2 },
    { name: 'Smith', technology: 'Java', city: 'Pune', experience: 5 },
    { name: 'John', technology: 'Java', city: 'Hyderabad', experience: 0 },
    { name: 'Sita', technology: 'React', city: 'Chennai', experience: 1 },
    { name: 'Arun', technology: 'Angular', city: 'Hyderabad', experience: 4 },
    { name: 'Krish', technology: 'React', city: 'Chennai', experience: 5 },
    { name: 'Teja', technology: 'Java', city: 'Pune', experience: 0 },
  ];
  candidateList: Observable<Candidate> = from<Candidate[]>(this.candidates);

  puneListCandidates: Candidate[] = [];
  techFilter!: string;

  constructor() {
    this.candidateList
      .pipe(filter((candidate) => candidate.city === 'Pune'))
      .subscribe(
        (value) => this.puneListCandidates.push(value),
        (error) => console.log('Pune Candidates List Observable error:', error)
      );

    this.candidateList.subscribe(
      (value) => this.filteredListByTechnology.push(value),
      (error) => console.log('Filtered List Observable error:', error)
    );
  }

  get filteredListByTechnology() {
    const list: Candidate[] = [];
    this.candidateList
      .pipe(filter((candidate) => candidate.technology == this.techFilter))
      .subscribe(
        (value) => list.push(value),
        (error) => console.log('Candidates List Observable error:', error)
      );
    return list;
  }

  get highestExperience() {
    let exp = 0;
    this.candidateList
      .pipe(max((a, b) => (a.experience < b.experience ? -1 : 1)))
      .subscribe(
        (value) => (exp = value.experience),
        (error) => console.log('Experience Observable error', error)
      );
    return exp;
  }

  get highestExperienceCandidates() {
    const list: Candidate[] = [];
    this.candidateList
      .pipe(filter((value) => value.experience == this.highestExperience))
      .subscribe(
        (value) => list.push(value),
        (error) => console.log('Candidates List Observable error:', error)
      );

    return list;
  }
  get fresherCandidates() {
    const list: Candidate[] = [];
    this.candidateList.pipe(filter((value) => value.experience == 0)).subscribe(
      (value) => list.push(value),
      (error) => console.log('Candidates List Observable error:', error)
    );

    return list;
  }

  get sortedList() {
    let list: Candidate[] = [];

    this.candidateList
      .pipe(
        toArray(),
        map((c) => c.sort((a, b) => a.experience - b.experience))
      )
      .subscribe((v) => (list = v));
    return list;
  }

  get candidateCountCityWise() {
    const list: any = [];

    this.candidateList
      .pipe(
        groupBy((c) => c.city),
        mergeMap((groupedObservable) =>
          groupedObservable.pipe(
            reduce((count) => count + 1, 0),
            map((count) => ({ city: groupedObservable.key, count: count }))
          )
        )
      )
      .subscribe((count) => list.push(count));
    return list;
  }

  get candidateCountFilteredByTechnology() {
    const list: any = [];
    this.candidateList
      .pipe(
        groupBy((c) => c.technology),
        mergeMap((group$) =>
          group$.pipe(
            reduce((c) => c + 1, 0),
            map((c) => ({ tech: group$.key, count: c }))
          )
        )
      )
      .subscribe((count) => list.push(count));
    return list;
  }
}
