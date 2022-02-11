import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OeuvresPage } from './oeuvres.page';

const routes: Routes = [
  {
    path: '',
    component: OeuvresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OeuvresPageRoutingModule {}
