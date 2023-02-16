import { Component, OnInit } from '@angular/core';
import { Book } from './Book';
import { BookService } from './book.service';

@Component({
  selector: 'app-day5-task2',
  templateUrl: './day5-task2.component.html',
  styleUrls: ['./day5-task2.component.scss'],
})
export class Day5Task2Component implements OnInit {
  books!: Book[];
  errorMessage: string = '';

  constructor(private bookService: BookService) {}

  getBooks() {
    this.bookService.getBooks().subscribe(
      (books) => {
        this.books = books;
      },
      (error) => (this.errorMessage = error)
    );
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
