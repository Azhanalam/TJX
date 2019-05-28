import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrunkingListComponent } from './trunking-list/trunking-list.component';
import { TrunkingAddComponent } from './trunking-add/trunking-add.component';

const routes: Routes = [
  { path: '', component: TrunkingListComponent },
  {path:'addTrunk',component:TrunkingAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
