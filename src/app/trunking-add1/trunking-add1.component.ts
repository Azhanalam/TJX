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
  // {radio: '', trunkorigin: '', trunkdestination: '', trunktype: '',trailer:'',comment:''},
  // {radio: '1', trunkorigin: 'Stoke On Trent-PC', trunkdestination: 'Hatfield-LC', trunktype: 'Stock Store Trunk',trailer:'TK4468',comment:''}
];

@Component({
  selector: 'app-trunking-add1',
  templateUrl: './trunking-add1.component.html',
  styleUrls: ['./trunking-add1.component.css']
})
export class TrunkingAdd1Component implements OnInit {
  displayedColumns: string[] = ['radio', 'trunkorigin', 'trunkdestination', 'trunktype','trailer','comment'];
  dataSource = ELEMENT_DATA;

    constructor(private router:Router) { }


  ngOnInit() {
  }

  addnew()
  {
  this.router.navigate(["addTrunk2"]);
  }
}
