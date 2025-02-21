import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Book } from '../model/book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  private apiUrl = 'https://localhost:56875/api/books/';

  constructor(private http: HttpClient) {}

  getBooks(pageNumber: number, pageSize: number, sortBy: string): Observable<ApiResponse<Book>> {
    // Create HttpParams to add query parameters
    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString())
      .set('sortBy', sortBy);

    // Make the GET request with the query parameters
    return this.http.get<ApiResponse<Book>>(`${this.apiUrl}GetList`, { params });
  }

  addBook(book: Book): Observable<ApiResponse<Book>> {
    return this.http.post<ApiResponse<Book>>(this.apiUrl+"Create", book);
  }
}