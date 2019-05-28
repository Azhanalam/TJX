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
    {headerName: 'Trip Ref', field: 'TripRef' ,width:100},
    {headerName: 'Driver', field: 'Driver', width:130},
    {headerName: 'Vehicle', field: 'Vehicle', width:130},
    {headerName: 'Run Date', field: 'RunDate', width:130},
    {headerName: 'Planned Start Time', field: 'PlannedStartTime', width:200 },
    {headerName: 'Planned Finish Time', field: 'PlannedFinishTime' , width:200},
    {headerName: 'Details', field: 'Details' , width:360}
        ];

        rowData = [
          { id: '', TripRef: '381868', Driver: 'Roger Watt', Vehicle:'PF08 OZP',RunDate:'01/04/2019',PlannedStartTime:'01/04/2019 06:00',PlannedFinishTime: '01/04/2019 15:00',Details:'Hatfield-LC, Walsall-PC,Walsall-PC,Hatfield-LC'},
          { id: '', TripRef: '381869', Driver: 'John Gilchrist', Vehicle:'PF08 OZL',RunDate:'12/04/2019',PlannedStartTime:'12/04/2019 15:00',PlannedFinishTime: '12/04/2019 23:00',Details:'Hatfield-LC,Stoke on Trent-PC,Hatfield-LC,Stoke on Trent-PC'},
          { id: '', TripRef: '381870', Driver: 'Mick Green', Vehicle:'PO59 JNF',RunDate:'21/04/2019',PlannedStartTime:'21/04/2019 16:00',PlannedFinishTime: '21/04/2019 23:59',Details:'Hatfield-LC,Stoke on Trent-PC,Hatfield-LC,Stoke on Trent-PC'},
          { id: '', TripRef: '381871', Driver: 'David Jackson', Vehicle:'PO60 AEL',RunDate:'08/05/2019',PlannedStartTime:'08/05/2019 17:00',PlannedFinishTime: '08/05/2019 23:59',Details:'Hatfield-LC, Walsall-PC,Walsall-PC,Hatfield-LC'},
          { id: '', TripRef: '381872', Driver: 'Mihia Rosia', Vehicle:'PO60 AEK',RunDate:'13/05/2019',PlannedStartTime:'13/05/2019 18:00',PlannedFinishTime: '13/05/2019 04:00',Details:'Hatfield-LC, Walsall-PC,Walsall-PC,Hatfield-LC'},
          { id: '', TripRef: '382846', Driver: 'Robert Gibson', Vehicle:'PO58 BFM',RunDate:'22/05/2019',PlannedStartTime:'22/05/2019 22:00',PlannedFinishTime: '22/05/2019 23:59',Details:'Hatfield-LC, Walsall-PC,Walsall-PC,Hatfield-LC'},
          { id: '', TripRef: '381873', Driver: 'John Gilchrist', Vehicle:'PO59 JNF',RunDate:'28/05/2019',PlannedStartTime:'28/05/2019 17:00',PlannedFinishTime: '28/05/2019 20:00',Details:'Hatfield-LC,Stoke on Trent-PC,Hatfield-LC,Stoke on Trent-PC'}
        ];

        addTrunk(){
    this.router.navigate(["addTrunk"]);
        }

        amendTrunk()
        {

          this.router.navigate(["amendTrunk"]);
        }

  }
