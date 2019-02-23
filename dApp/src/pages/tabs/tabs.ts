import { Component } from '@angular/core';

import { InfoPage } from '../info/info';
import { DietPage } from '../diet/diet';
import { HomePage } from '../home/home';
import { TestsPage } from '../tests/tests';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = InfoPage;
  tab3Root = DietPage;
  tab4Root = TestsPage;

  constructor() {

  }
}
