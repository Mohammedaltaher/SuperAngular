import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../core/service/api/book.service';
import { Book } from '../../shared/models/book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'] ,
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  providers:[BookService]
  
})
export class BookComponent implements OnInit {
  books: Book[] = [];
  bookForm: FormGroup;

  constructor(private bookService: BookService, private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      nameAr: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks(1,10,"Name").subscribe((data) => (this.books = data.success));
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
     this.bookService.createBook(this.bookForm.value).subscribe(() => {
       this.loadBooks();
       this.bookForm.reset();
     });
    }
  }
}