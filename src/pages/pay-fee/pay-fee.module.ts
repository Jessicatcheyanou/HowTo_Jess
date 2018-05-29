import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayFeePage } from './pay-fee';

@NgModule({
  declarations: [
    PayFeePage,
  ],
  imports: [
    IonicPageModule.forChild(PayFeePage),
  ],
})
export class PayFeePageModule {}
