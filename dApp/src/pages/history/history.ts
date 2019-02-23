import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data/data';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  bg: any = [{amount: '0', color: "primary"}];
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
    this.bg = this.dataService.bg;
  }

}
