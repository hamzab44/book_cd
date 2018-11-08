import { Component } from '@angular/core';
import {MenuController, ModalController} from "ionic-angular";
import {CdsServices} from "../../services/cds.services";
import {Cd} from "../../models/Cd";
import {LendcdPage} from "./lendcd/lendcd";

@Component({
  selector: 'page-cdlist',
  templateUrl: 'cdlist.html',
})
export class CdlistPage {
  cdList: Cd[];
  constructor(private modelCtrl: ModalController,
              private cdsService: CdsServices,
              private menuCtrl: MenuController) {
  }

  ionViewWillEnter(){
    this.cdList = this.cdsService.cdList.slice();
  }

  onLoadCd(index: number) {
    let modal = this.modelCtrl.create(LendcdPage, {index: index});
    modal.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();

  }

}
