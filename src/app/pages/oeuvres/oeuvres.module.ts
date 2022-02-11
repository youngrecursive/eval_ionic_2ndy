import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OeuvresPageRoutingModule } from './oeuvres-routing.module';

import { OeuvresPage } from './oeuvres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OeuvresPageRoutingModule
  ],
  declarations: [OeuvresPage]
})
export class OeuvresPageModule {}
