import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Data {
  meals: any;
  items: any;
  bg: any;
  fn: any;
  constructor(public http: Http, public alertCtrl: AlertController) {
    console.log('Hello DataProvider Provider');
    this.bg = [{amount: '0', color: "primary"}];
    this.fn = [{result: '0'}];
    this.meals = [{title:'Summary',calories:'0',carbs:'0',insulin:'0'}];
    this.items = [
      {title: 'couscous', calories: 176, serving: 157, carbs: 36},
      {title: 'hummus', calories: 409, serving: 246, carbs: 35},
      {title: 'bean', calories: 125, serving: 100, carbs: 18},
      {title: 'date', calories: 282, serving: 100, carbs: 75},
      {title: 'banana', calories: 89, serving: 100, carbs: 23},
      {title: 'apple', calories: 52, serving: 100, carbs: 14},
      {title: 'apricot', calories: 48, serving: 100, carbs: 11},
      {title: 'cooked lentils', calories: 165, serving: 100, carbs: 19},
      {title: 'garlic', calories: 149, serving: 100, carbs: 33},
      {title: 'olive oil', calories: 884, serving: 100, carbs: 0},
      {title: 'corn oil', calories: 884, serving: 100, carbs: 0},
      {title: 'egg', calories: 147, serving: 100, carbs: 1},
      {title: 'turkey', calories: 119, serving: 100, carbs: 0},
      {title: 'duck', calories: 132, serving: 100, carbs: 0},
      {title: 'grilled chicken', calories: 237, serving: 100, carbs: 0},
      {title: 'peanuts', calories: 599, serving: 100, carbs: 15},
      {title: 'cashew', calories: 553, serving: 100, carbs: 30},
      {title: 'pistachio', calories: 557, serving: 100, carbs: 28},
      {title: 'hazelnut', calories: 600, serving: 100, carbs: 18},
      {title: 'butter', calories: 717, serving: 100, carbs: 0.1},
      {title: 'cream', calories: 130, serving: 100, carbs: 4},
      {title: 'feta cheese', calories: 264, serving: 100, carbs: 4},
      {title: 'yogurt', calories: 99, serving: 100, carbs: 19},
      {title: 'whole milk', calories: 62, serving: 100, carbs: 5},
      {title: 'skim milk', calories: 83, serving: 100, carbs: 12},
      {title: 'liver', calories: 135, serving: 100, carbs: 4},
      {title: 'chicken', calories: 237, serving: 100, carbs: 0},
      {title: 'orange', calories: 47, serving: 100, carbs: 12},
      {title: 'guava', calories: 68, serving: 100, carbs: 14},
      {title: 'grapes', calories: 69, serving: 100, carbs: 18},
      {title: 'almonds', calories: 578, serving: 100, carbs: 20},
      {title: 'avocado', calories: 160, serving: 100, carbs: 8},
      {title: 'mango', calories: 65, serving: 100, carbs: 17},
      {title: 'watermelon', calories: 30, serving: 100, carbs: 8},
      {title: 'peach', calories: 39, serving: 100, carbs: 10},
      {title: 'pineapple', calories: 48, serving: 100, carbs: 13},
      {title: 'strawberry', calories: 32, serving: 100, carbs: 8},
      {title: 'lemon', calories: 29, serving: 100, carbs: 9},
      {title: 'tomato', calories: 18, serving: 100, carbs: 4},
      {title: 'cucumber', calories: 12, serving: 100, carbs: 2},
      {title: 'carrot', calories: 41, serving: 100, carbs: 10},
      {title: 'green pepper', calories: 20, serving: 100, carbs: 5},
      {title: 'lettuce', calories: 14, serving: 100, carbs: 3},
      {title: 'eggplant', calories: 24, serving: 100, carbs: 6},
      {title: 'cabbage', calories: 24, serving: 100, carbs: 6},
      {title: 'onion', calories: 42, serving: 100, carbs: 10},
      {title: 'potato', calories: 87, serving: 100, carbs: 20},
      {title: 'salmon', calories: 160, serving: 100, carbs: 0},
      {title: 'sardine', calories: 208, serving: 100, carbs: 0},
      {title: 'canned tuna without oil', calories: 116, serving: 100, carbs: 0},
      {title: 'cooked rice', calories: 135, serving: 100, carbs: 28},
      {title: 'okra stew', calories: 35, serving: 100, carbs: 4},
      {title: 'cooked white bean', calories: 198, serving: 100, carbs: 23},
      {title: 'beef', calories: 288, serving: 100, carbs: 0},
      {title: 'lamb', calories: 292, serving: 100, carbs: 0},
      {title: 'kebab', calories: 159, serving: 100, carbs: 20},
      {title: 'falafel', calories: 333, serving: 100, carbs: 32},
      {title: 'baklava', calories: 428, serving: 100, carbs: 38},
      {title: 'white bread', calories: 266, serving: 100, carbs: 51},
      {title: 'whole wheat bread', calories: 259, serving: 100, carbs: 47},
      {title: 'chicken breast with skin', calories: 195, serving: 100, carbs: 0},
      {title: 'chicken breast without skin', calories: 164, serving: 100, carbs: 0},
      {title: 'chicken thigh with skin', calories: 245, serving: 100, carbs: 0},
      {title: 'chicken thigh without skin', calories: 207, serving: 100, carbs: 0},
      {title: 'cup of black tea', calories: 1, serving: 100, carbs: 0.3},
      {title: 'cup of green tea', calories: 2, serving: 100, carbs: 0.3},
      {title: 'cup of milk', calories: 86, serving: 100, carbs: 12},
      {title: 'cup of coffee', calories: 2, serving: 100, carbs: 0.1},
      {title: 'ice cream', calories: 137, serving: 66, carbs: 16}
    ]
  }

  filterItems(searchTerm) {
    return this.items.filter((item)=>{
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase())>-1;
    });
  }
  addItem(){
    let prompt = this.alertCtrl.create({
      title: 'Add Meal',
      inputs: [
        {
          name: 'title',
          placeholder: 'Food Name'
        },
        {
          name: 'calories',
          placeholder: 'Calories'
        },
        {
          name: 'carbs',
          placeholder: 'Carbohydrates(g)'
        },
        {
          name: 'serving',
          placeholder: 'Serving Size (g)'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.items.push(data);
          }
        }
      ]
    });
    prompt.present();
  }
  clearMeal() {
    this.meals.splice(1,this.meals.length-1);
    this.meals[0].calories = '0';
    this.meals[0].carbs = '0';
    this.meals[0].insulin = '0';
  }
  addMeal(){
    let prompt = this.alertCtrl.create({
      title: 'Add Meal',
      inputs: [
        {
          name: 'title',
          placeholder: 'Food Name'
        },
        {
          name: 'calories',
          placeholder: 'Calories'
        },
        {
          name: 'carbs',
          placeholder: 'Carbohydrates(g)'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.meals.push(data);
            this.meals[this.meals.length-1].insulin = String((Number(this.meals[this.meals.length-1].carbs))/10);
            this.meals[0].calories =String(Number(data.calories)+Number(this.meals[0].calories));
            this.meals[0].carbs =String(Number(data.carbs)+Number(this.meals[0].carbs));
            this.meals[0].insulin = String((Number(this.meals[0].carbs))/10);
          }
        }
      ]
    });
    prompt.present();
  }

  editMeal(meal) {
    let prompt = this.alertCtrl.create({
      title: 'Edit Meal',
      inputs: [
        {
          name: 'title',
          placeholder: 'Food Name'
        },
        {
          name: 'calories',
          placeholder: 'Calories'
        },
        {
          name: 'carbs',
          placeholder: 'Carbohydrates(g)'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            let index = this.meals.indexOf(meal);
            if(index>-1) {
              this.meals[0].calories =String(Number(this.meals[0].calories)-Number(this.meals[index].calories));
              this.meals[0].carbs =String(Number(this.meals[0].carbs)-Number(this.meals[index].carbs));
              this.meals[index] = data;
              this.meals[index].insulin = String((Number(this.meals[index].carbs))/10);
              this.meals[0].calories =String(Number(data.calories)+Number(this.meals[0].calories));
              this.meals[0].carbs =String(Number(data.carbs)+Number(this.meals[0].carbs));
              this.meals[0].insulin = String((Number(this.meals[0].carbs))/10);
            }
          }
        }
      ]
    });
    prompt.present();
  }

  deleteMeal(meal) {
    let index = this.meals.indexOf(meal);
    if(index>-1) {
      this.meals[0].calories =String(Number(this.meals[0].calories)-Number(this.meals[index].calories));
      this.meals[0].carbs =String(Number(this.meals[0].carbs)-Number(this.meals[index].carbs));
      this.meals[0].insulin = String((Number(this.meals[0].carbs))/10);
      this.meals.splice(index,1);
    }
  }
  itemMeal(item){
  let prompt = this.alertCtrl.create({
    title: 'Add Meal to Diet',
    inputs: [
      {
        name: 'amount',
        placeholder: 'Amount (g)'
      }
    ],
    buttons: [
      {
        text: 'Cancel'
      },
      {
        text: 'Add',
        handler: data => {
          this.meals.push(data);
          this.meals[this.meals.length-1].calories = String(Number(item.calories)*Number(data.amount)/Number(item.serving));
          this.meals[this.meals.length-1].carbs = String(Number(item.carbs)*Number(data.amount)/Number(item.serving));
          this.meals[this.meals.length-1].insulin = String(Number(this.meals[this.meals.length-1].carbs)/10);
          this.meals[this.meals.length-1].title = item.title;
          this.meals[0].calories = String(Number(this.meals[this.meals.length-1].calories)+Number(this.meals[0].calories));
          this.meals[0].carbs =String(Number(this.meals[this.meals.length-1].carbs)+Number(this.meals[0].carbs));
          this.meals[0].insulin = String((Number(this.meals[0].carbs))/10);
        }
      }
    ]
  });
  prompt.present();
}
  bgResult(){
    let prompt = this.alertCtrl.create({
      title: 'Add Test Result',
      inputs: [
        {
          name: 'amount',
          placeholder: 'Amount'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.bg.push(data);
            if(data.amount<60){
              this.bg[this.bg.length-1].color = "dark";
              let prom = this.alertCtrl.create({
                title:'WARNING: Blood Glucose is too low',
                subTitle:'Risk of Hypoglycemia: Consume carbohydrates or take glucagon'
              });
              prom.present();
            }
            else if(data.amount>300){
              this.bg[this.bg.length-1].color = "danger";
              let prom = this.alertCtrl.create({
                title:'WARNING: Blood Glucose is too high',
                subTitle:'Risk of Hyperglycemia: Take insulin'
              });
              prom.present();
            }
            else {
              this.bg[this.bg.length-1].color = "primary";
            }
          }
        }
      ]
    });
    prompt.present();
  }

  fnResult(){
    let prompt = this.alertCtrl.create({
      title: 'Add Test Result',
      inputs: [
        {
          name: 'result',
          placeholder: 'Result'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.fn.push(data);
          }
        }
      ]
    });
    prompt.present();
  }
}
