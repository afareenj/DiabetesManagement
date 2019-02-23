import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FindMealPage } from '../find-meal/find-meal';
import { Data } from '../../providers/data/data';


@Component({
  selector: 'page-diet',
  templateUrl: 'diet.html'
})
export class DietPage {
  meals: any = [{title:'Summary',calories:'0',carbs:'0',insulin:'0'}];
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public dataService: Data) {

  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad DietPage');
    this.setMeals();
  }

  setMeals(){
    this.meals = this.dataService.meals;
  }

  clear() {
    this.dataService.clearMeal();
  }

  findMeal() {
    this.navCtrl.push(FindMealPage);
  }

  add(){
    this.dataService.addMeal();
  }

  edit(meal) {
    this.dataService.editMeal(meal);
  }

  delete(meal) {
    this.dataService.deleteMeal(meal);
  }

}
