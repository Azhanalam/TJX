import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { TrunkingListComponent } from './trunking-list/trunking-list.component';
import { TrunkingAddComponent } from './trunking-add/trunking-add.component';
import { TrunkingAmendComponent } from './trunking-amend/trunking-amend.component';
import { TrunkingList2Component } from './trunking-list2/trunking-list2.component';
import { TrunkingList3Component } from './trunking-list3/trunking-list3.component';
import { TrunkingAdd1Component } from './trunking-add1/trunking-add1.component';
import { TrunkingAdd2Component } from './trunking-add2/trunking-add2.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'TrunkList', component:TrunkingListComponent},
  {path:'addTrunk',component:TrunkingAdd1Component},
  {path:'amendTrunk',component:TrunkingAmendComponent},
  {path:'TrunkList2',component:TrunkingList2Component},
  {path:'TrunkList3',component:TrunkingList3Component},
  {path:'addTrunk2',component:TrunkingAdd2Component},
  {path:'addTrunk3',component:TrunkingAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
