import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BgRemindersPage } from './bg-reminders';

@NgModule({
  declarations: [
    BgRemindersPage,
  ],
  imports: [
    IonicPageModule.forChild(BgRemindersPage),
  ],
})
export class BgRemindersPageModule {}
