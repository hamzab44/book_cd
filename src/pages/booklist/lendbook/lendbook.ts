import { Component } from '@angular/core';
import {Book} from "../../../models/Book";
import {NavParams, ViewController} from "ionic-angular";
import {BooksServices} from "../../../services/books.services";

@Component({
  selector: 'page-lendbook',
  templateUrl: 'lendbook.html',
})
export class LendbookPage {

  index: number;
  book: Book;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public booksService: BooksServices) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.booksService.bookList[this.index];

  }
  dismissModal(){
    this.viewCtrl.dismiss();
  }

  onToggleBook(){
    this.book.isLend = !this.book.isLend;
  }

}
