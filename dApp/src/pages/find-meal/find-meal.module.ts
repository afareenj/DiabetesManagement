import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindMealPage } from './find-meal';

@NgModule({
  declarations: [
    FindMealPage,
  ],
  imports: [
    IonicPageModule.forChild(FindMealPage),
  ],
})
export class FindMealPageModule {}
