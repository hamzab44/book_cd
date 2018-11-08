import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {BooklistPage} from "../pages/booklist/booklist";
import {LendbookPage} from "../pages/booklist/lendbook/lendbook";
import {BooksServices} from "../services/books.services";
import {TabsPage} from "../pages/tabs/tabs";
import {SettingsPage} from "../pages/settings/settings";
import {CdsServices} from "../services/cds.services";
import {CdlistPage} from "../pages/cdlist/cdlist";
import {LendcdPage} from "../pages/cdlist/lendcd/lendcd";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BooklistPage,
    LendbookPage,
    TabsPage,
    SettingsPage,
    CdlistPage,
    LendcdPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BooklistPage,
    LendbookPage,
    TabsPage,
    SettingsPage,
    CdlistPage,
    LendcdPage
  ],
  providers: [
    BooksServices,
    CdsServices,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
