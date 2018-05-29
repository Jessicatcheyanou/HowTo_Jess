import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClearancesPage } from './clearances';

@NgModule({
  declarations: [
    ClearancesPage,
  ],
  imports: [
    IonicPageModule.forChild(ClearancesPage),
  ],
})
export class ClearancesPageModule {}
