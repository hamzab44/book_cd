import { Component} from "@angular/core";
import {BooklistPage} from "../booklist/booklist";
import {CdlistPage} from "../cdlist/cdlist";


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  booksPage = BooklistPage;
  cdsPage = CdlistPage;

}
