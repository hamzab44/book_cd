import { Component } from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";
import {Cd} from "../../../models/Cd";
import {CdsServices} from "../../../services/cds.services";

@Component({
  selector: 'page-lendcd',
  templateUrl: 'lendcd.html',
})
export class LendcdPage {

  index: number;
  cd: Cd;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public cdsService: CdsServices) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.cdsService.cdList[this.index];

  }
  dismissModal(){
    this.viewCtrl.dismiss();
  }

  onToggleBook(){
    this.cd.isLend = !this.cd.isLend;
  }

}
