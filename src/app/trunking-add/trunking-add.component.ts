import { Component, OnInit } from '@angular/core';

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
  selector: 'app-trunking-add',
  templateUrl: './trunking-add.component.html',
  styleUrls: ['./trunking-add.component.css']
})


  



export class TrunkingAddComponent implements OnInit {

  displayedColumns: string[] = ['radio', 'trunkorigin', 'trunkdestination', 'trunktype','trailer','comment'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
