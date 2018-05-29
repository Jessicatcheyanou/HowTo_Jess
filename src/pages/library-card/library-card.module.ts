import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LibraryCardPage } from './library-card';

@NgModule({
  declarations: [
    LibraryCardPage,
  ],
  imports: [
    IonicPageModule.forChild(LibraryCardPage),
  ],
})
export class LibraryCardPageModule {}
