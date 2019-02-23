import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  meals: any = [{title:'Summary',calories:'0',carbs:'0',insulin:'0'}];
  bg: any = [{amount: '0', color: "primary"}];
  fn: any = [{result: '0'}];
  exercises: any = [{title: 'Walking', amount: '7,083 steps', calories: '290'}];
  meds: any = [{title: 'Metformin', dose: 'One 500 mg tablet 2x daily'}];
  constructor(public navCtrl: NavController, public dataService: Data, public alertCtrl: AlertController) {

  }

  ionViewDidLoad(){
    this.meals = this.dataService.meals;
    this.bg = this.dataService.bg;
    this.fn = this.dataService.fn;
  }

  addExercise(){
      let prompt = this.alertCtrl.create({
        title: 'Add Meal',
        inputs: [
          {
            name: 'title',
            placeholder: 'Exercise Name'
          },
          {
            name: 'calories',
            placeholder: 'Calories Burned'
          },
          {
            name: 'amount',
            placeholder: 'Amount of Exercise'
          }
        ],
        buttons: [
          {
            text: 'Cancel'
          },
          {
            text: 'Add',
            handler: data => {
              this.exercises.push(data);
            }
          }
        ]
      });
      prompt.present();
  }

  addMed(){
    let prompt = this.alertCtrl.create({
      title: 'Add Meal',
      inputs: [
        {
          name: 'title',
          placeholder: 'Medication Name'
        },
        {
          name: 'dose',
          placeholder: 'Dosage Instructions'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.meds.push(data);
          }
        }
      ]
    });
    prompt.present();
  }
}
