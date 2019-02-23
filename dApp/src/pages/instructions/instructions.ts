import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the InstructionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instructions',
  templateUrl: 'instructions.html',
})
export class InstructionsPage {
  public b:any = [{color:'primary'},{color:'primary'},{color:'primary'},{color:'primary'},{color:'primary'},{color:'primary'},{color:'primary'},{color:'primary'},{color:'primary'},{color:'primary'},{color:'primary'},{color:'primary'}];
  totalClicked:number=0;
  yesClicked:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstructionsPage');
  }
  resetColors(){
    for(var i:number=0;i<12;i++){
      this.b[i].color='primary';
    }
    this.totalClicked=0;
    this.yesClicked=0;
  }
  setColor(buttonNumber:number){
    let prompt = this.alertCtrl.create({
      title: 'Result at this position',
      buttons: [
        {
          text: 'Felt Vibration',
          handler: () => {
            this.b[buttonNumber].color = 'secondary';
            this.totalClicked++;
            this.yesClicked++;
            if(this.totalClicked==12){this.result();}
          }
        },
        {
          text: 'No Vibration',
          handler: () => {
            this.b[buttonNumber].color = 'danger';
            this.totalClicked++;
            if(this.totalClicked==12){this.result();}
          }
        },
        {
          text: 'Cancel'
        }
      ]
    });
    prompt.present();
  }
  result(){
    let prompt = this.alertCtrl.create({
      title: 'Final Result',
      subTitle:String(this.yesClicked).concat(' out of ').concat(String(this.totalClicked)).concat(' correct'),
      buttons: [
        {
          text: 'Ok'
        }
      ]
    });
    prompt.present();
  }
}
