import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { TrunkingListComponent } from './trunking-list/trunking-list.component';
import { TrunkingAddComponent } from './trunking-add/trunking-add.component';
import { TrunkingAmmendComponent } from './trunking-ammend/trunking-ammend.component';
import { TrunkingList2Component } from './trunking-list2/trunking-list2.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'TrunkList', component:TrunkingListComponent},
  {path:'addTrunk',component:TrunkingAddComponent},
  {path:'ammendTrunk',component:TrunkingAmmendComponent},
  {path:'TrunkList2',component:TrunkingList2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
