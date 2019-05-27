import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trunking-list',
  templateUrl: './trunking-list.component.html',
  styleUrls: ['./trunking-list.component.css']
})
export class TrunkingListComponent implements OnInit {

  constructor() { }

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
          {headerName: 'Details', field: 'Details' , width:265}
      ];

      rowData = [
          { id: '', TripRef: '3818168', Driver: 'Roger Watt', Vehicle:'PF080ZP',RunDate:'01/08/2019',PlannedStartTime:'01/08/2019',PlannedFinishTime: '01/08/2019'},
          { id: '', TripRef: '3818168', Driver: 'Roger Watt', Vehicle:'PF080ZP',RunDate:'01/08/2019',PlannedStartTime:'01/08/2019',PlannedFinishTime: '01/08/2019'},
          { id: '', TripRef: '3818168', Driver: 'Roger Watt', Vehicle:'PF080ZP',RunDate:'01/08/2019',PlannedStartTime:'01/08/2019',PlannedFinishTime: '01/08/2019'},
          { id: '', TripRef: '3818168', Driver: 'Roger Watt', Vehicle:'PF080ZP',RunDate:'01/08/2019',PlannedStartTime:'01/08/2019',PlannedFinishTime: '01/08/2019'},
          { id: '', TripRef: '3818168', Driver: 'Roger Watt', Vehicle:'PF080ZP',RunDate:'01/08/2019',PlannedStartTime:'01/08/2019',PlannedFinishTime: '01/08/2019'},
          { id: '', TripRef: '3818168', Driver: 'Roger Watt', Vehicle:'PF080ZP',RunDate:'01/08/2019',PlannedStartTime:'01/08/2019',PlannedFinishTime: '01/08/2019'},
      ];
      ];
}
