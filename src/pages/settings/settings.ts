import {Component} from '@angular/core';
import {MenuController, ModalController} from "ionic-angular";
import {CdsServices} from "../../services/cds.services";
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  constructor(private menuCtrl: MenuController) {
  }
  onToggleMenu(){
    this.menuCtrl.open();

  }
}
