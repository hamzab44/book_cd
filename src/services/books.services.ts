import {Book} from "../models/Book";

export class BooksServices{
  bookList: Book[] = [
    {
      name: 'Dealer du Tout-Paris',
      isLend: true
    },
    {
      name: 'Le Signal',
      isLend: true
    },
    {
      name: 'Chère Mamie',
      isLend: false
    },
    {
      name: 'Harry Potter - Tome 1 ',
      isLend: false
    },
    {
      name: 'Harry Potter - Tome 2',
      isLend: true
    }
  ];
}
