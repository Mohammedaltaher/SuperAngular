import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Book } from '../../../shared/models/book.model';
import { BaseService } from './base.service';
import { ApiResponse, ApiResponses } from '../../../shared/models/ApiResponse';

@Injectable({ providedIn: 'root' })
export class BookService extends BaseService<Book> {
  constructor(http: HttpClient) {
    super(http, 'https://localhost:56875/api/books/');
  }

  /**
   * 📚 Get list of books with pagination & sorting
   */
  getBooks(pageNumber: number, pageSize: number, sortBy: string): Observable<ApiResponses<Book>> {
    return this.getList('GetList', {
      pageNumber,
      pageSize,
      sortBy,
    });
  }

  /**
   * ➕ Create a new book
   */
  createBook(book: Book): Observable<ApiResponse<Book>> {
    return this.create('Create', book);
  }

  /**
   * 🔄 Update an existing book
   */
  updateBook(id: string, book: Book): Observable<ApiResponse<Book>> {
    return this.update('Update', id, book);
  }

  /**
   * 🗑️ Delete a book by ID
   */
  deleteBook(id: string): Observable<ApiResponse<Book>> {
    return this.delete('Delete', id);
  }
}
