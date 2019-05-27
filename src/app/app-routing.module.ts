import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrunkingListComponent } from './trunking-list/trunking-list.component';

const routes: Routes = [
  { path: '', component: TrunkingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
