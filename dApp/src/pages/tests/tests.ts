import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BgRemindersPage } from '../bg-reminders/bg-reminders';
import { HistoryPage } from '../history/history';
import { InstructionsPage } from '../instructions/instructions';
import { Data } from '../../providers/data/data';

/**
 * Generated class for the TestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tests',
  templateUrl: 'tests.html',
})
export class TestsPage {
  bg: any = [{amount: '0', color: "primary"}];
  fn: any = [{result: '0'}];
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public dataService: Data) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestsPage');
    this.bg = this.dataService.bg;
    this.fn = this.dataService.fn;
  }

  setBGReminders(){
    this.navCtrl.push(BgRemindersPage);
  }

  history(){
    this.navCtrl.push(HistoryPage);
  }

  dispInstructions(){
    this.navCtrl.push(InstructionsPage);
  }

  addBGResult(){
    this.dataService.bgResult();
  }
  addFNResult(){
    this.dataService.fnResult();
  }
}
