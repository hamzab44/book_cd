import { Component } from '@angular/core';
import {Book} from "../../models/Book";
import {MenuController, ModalController} from "ionic-angular";
import {BooksServices} from "../../services/books.services";
import {LendbookPage} from "./lendbook/lendbook";

@Component({
  selector: 'page-booklist',
  templateUrl: 'booklist.html',
})
export class BooklistPage {
  bookList: Book[];
  constructor(private modelCtrl: ModalController,
              private booksService: BooksServices,
              private menuCtrl: MenuController) {
  }

  ionViewWillEnter(){
    this.bookList = this.booksService.bookList.slice();
  }

  onLoadBook(index: number) {
    let modal = this.modelCtrl.create(LendbookPage, {index: index});
    modal.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();

  }

}
