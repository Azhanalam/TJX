import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-trunking-list3',
  templateUrl: './trunking-list3.component.html',
  styleUrls: ['./trunking-list3.component.css']
})
export class TrunkingList3Component implements OnInit {

    constructor(private router:Router) { }

  ngOnInit() {
  }


    title = 'app';

        columnDefs = [
            {headerName: '', field: 'id', width:50 ,checkboxSelection: false, cellRenderer: function cellTitle(params) {
    let cellValue = '<div class="ngSelectionCell"><input name="selected" type="radio"></div>';
    return cellValue;
    }},
            {headerName: 'Trip Ref', field: 'TripRef' ,width:150},
            {headerName: 'Driver', field: 'Driver', width:150},
            {headerName: 'Vehicle', field: 'Vehicle', width:150},
            {headerName: 'Run Date', field: 'RunDate', width:150},
            {headerName: 'Planned Start Time', field: 'PlannedStartTime', width:200 },
            {headerName: 'Planned Finish Time', field: 'PlannedFinishTime' , width:200},
            {headerName: 'Details', field: 'Details' , width:300}
        ];

        rowData = [
            { id: '', TripRef: '3818168', Driver: 'Roger Watt', Vehicle:'PF08 OZP',RunDate:'01/08/2011',PlannedStartTime:'01/08/2011 06:00',PlannedFinishTime: '01/08/2019 15:00',Details:'Hatfield-LC, Walsall-PC,Walsall-PC,Hatfield-LC'},
            { id: '', TripRef: '3818169', Driver: 'David Jackson', Vehicle:'PF08 OZL',RunDate:'01/08/2011',PlannedStartTime:'01/08/2011 15:00',PlannedFinishTime: '01/08/2011 23:00',Details:'Hatfield-LC,Stoke on Trent-PC,Hatfield-LC,Stoke on Trent-PC'},
            { id: '', TripRef: '3818170', Driver: 'Mick Green', Vehicle:'PO59 JNF',RunDate:'01/08/2011',PlannedStartTime:'01/08/2011 16:00',PlannedFinishTime: '01/08/2011 23:59',Details:'Hatfield-LC,Stoke on Trent-PC,Hatfield-LC,Stoke on Trent-PC'},
            { id: '', TripRef: '3818171', Driver: 'David Jackson', Vehicle:'PO60 AEL',RunDate:'01/08/2011',PlannedStartTime:'01/08/2011 17:00',PlannedFinishTime: '01/08/2011 23:59',Details:'Hatfield-LC, Walsall-PC,Walsall-PC,Hatfield-LC'},
            { id: '', TripRef: '3818172', Driver: 'Mihia Rosia', Vehicle:'PO60 AEK',RunDate:'01/08/2011',PlannedStartTime:'01/08/2011 18:00',PlannedFinishTime: '02/08/2011 04:00',Details:'Hatfield-LC, Walsall-PC,Walsall-PC,Hatfield-LC'},
            { id: '', TripRef: '382846', Driver: 'Robert Gibson', Vehicle:'PO58 BFM',RunDate:'01/08/2011',PlannedStartTime:'01/08/2011 22:00',PlannedFinishTime: '01/08/2011 23:59',Details:'Hatfield-LC, Walsall-PC,Walsall-PC,Hatfield-LC'},
            { id: '', TripRef: '3818173', Driver: 'John Gilchrist', Vehicle:'PO59 JNF',RunDate:'28/05/2019',PlannedStartTime:'28/05/2019 17:00',PlannedFinishTime: '28/05/2019 20:00',Details:'Hatfield-LC, Walsall-PC,Walsall-PC,Hatfield-LC'}
        ];

        addTrunk(){
    this.router.navigate(["addTrunk"]);
        }

        ammendTrunk()
        {

          this.router.navigate(["ammendTrunk"]);
        }

  }
