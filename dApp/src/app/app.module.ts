import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { MyApp } from './app.component';

import { InfoPage } from '../pages/info/info';
import { DietPage } from '../pages/diet/diet';
import { HomePage } from '../pages/home/home';
import { TestsPage } from '../pages/tests/tests';
import { FindMealPage } from '../pages/find-meal/find-meal';
import { BgRemindersPage } from '../pages/bg-reminders/bg-reminders';
import { SymptomsPage } from '../pages/symptoms/symptoms';
import { InsulinPage } from '../pages/insulin/insulin';
import { InstructionsPage } from '../pages/instructions/instructions';
import { HistoryPage } from '../pages/history/history';
import { TabsPage } from '../pages/tabs/tabs';
import { Data } from '../providers/data/data';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    InfoPage,
    DietPage,
    HomePage,
    TestsPage,
    FindMealPage,
    BgRemindersPage,
    SymptomsPage,
    InsulinPage,
    InstructionsPage,
    HistoryPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InfoPage,
    DietPage,
    HomePage,
    TestsPage,
    FindMealPage,
    BgRemindersPage,
    SymptomsPage,
    InsulinPage,
    InstructionsPage,
    HistoryPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    LocalNotifications,
    Data
  ]
})
export class AppModule {}
