import { Component } from '@angular/core';
import {BooklistPage} from "../booklist/booklist";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bookListPage = BooklistPage;

}

