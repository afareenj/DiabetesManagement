import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SymptomsPage } from '../symptoms/symptoms';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

  constructor(public navCtrl: NavController) {

  }

  symptomsPage(){
    this.navCtrl.push(SymptomsPage);
  }

}
