import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit {

  items = [
    {id: 1, author: 'Frank Herbert', title: 'Dune',
      image: 'https://images.gr-assets.com/books/1434908555l/234225.jpg'},
    {id: 2, author: 'Orson Scott Card', title: 'Ender\'s Game (Ender\'s Saga, #1)',
      image: 'https://images.gr-assets.com/books/1408303130l/375802.jpg'},
    {id: 3, author: 'Douglas Adams', title: 'The Hitchhiker\'s Guide to the Galaxy',
      image: 'https://images.gr-assets.com/books/1559986152l/386162.jpg'},
    {id: 4, author: 'George Orwell', title: '1984', image:
      'https://images.gr-assets.com/books/1532714506l/40961427.jpg'},
    {id: 5, author: 'Ray Bradbury', title: 'Fahrenheit 451', image:
      'https://images.gr-assets.com/books/1383718290l/13079982.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
