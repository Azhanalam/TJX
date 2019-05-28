import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

export interface PeriodicElement {
  radio:string;
  trunkorigin:string;
  trunkdestination:string;
  trunktype: string;
  trailer:string;
  comment:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {radio: '1', trunkorigin: 'Hatfield-LC', trunkdestination: 'Stoke on Trent-PC', trunktype: 'Empty TLHU Trunk',trailer:'TKD0448',comment:''},
  {radio: '1', trunkorigin: 'Stoke On Trent-PC', trunkdestination: 'Hatfield-LC', trunktype: 'Stock Store Trunk',trailer:'TK4468',comment:''}
];

@Component({
  selector: 'app-trunking-ammend',
  templateUrl: './trunking-ammend.component.html',
  styleUrls: ['./trunking-ammend.component.css']
})
export class TrunkingAmmendComponent implements OnInit {

  displayedColumns: string[] = ['radio', 'trunkorigin', 'trunkdestination', 'trunktype','trailer','comment'];
  dataSource = ELEMENT_DATA;

  constructor(private router:Router) { }


  ngOnInit() {
  }

ammendSave()
{
this.router.navigate(["TrunkList3"]);
}
}
