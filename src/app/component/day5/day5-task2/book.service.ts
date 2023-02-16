import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './Book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private booksUrl = 'assets/books.json';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }
}
