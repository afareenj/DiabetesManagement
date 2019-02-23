import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FormControl } from '@angular/forms';
import { Data } from '../../providers/data/data';
import 'rxjs/add/operator/debounceTime';
/**
 * Generated class for the FindMealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find-meal',
  templateUrl: 'find-meal.html',
})
export class FindMealPage {
  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  meals: any;
  meal: any;
  constructor(public navCtrl: NavController, public dataService: Data, public navParams: NavParams, private inAppBrowser: InAppBrowser, public alertCtrl: AlertController) {
    this.searchControl = new FormControl();
  }
  searchGoogle(){
    const browser = this.inAppBrowser.create('https://google.com', '_system');
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindMealPage');
    this.setFilteredItems();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.setFilteredItems();
    });
  }

  add(){
    this.dataService.addItem();
  }

  setFilteredItems(){
    this.items = this.dataService.filterItems(this.searchTerm);
    this.meals = this.dataService.meals;
  }

  selectMeal(item){
    this.dataService.itemMeal(item);
  }
}
