import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css']
})
export class DashboardTableComponent implements OnInit {

  displayedColumns: string[] = ["date", "time", "type", "amountSent", "fee", "amountReceived", "status"];
  dataSource: any;
  pageEvent:any
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  totalRecords: number = 0;
  pageSize: number = 5;
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.getData());
    this.totalRecords = this.dataSource.data.length;
    this.dataSource.paginator = this.paginator;
  }

  onPaginateChange(event: any) {
    console.log(event);
    console.log(Math.ceil(this.totalRecords / this.pageSize) - 1);
    if (event.pageIndex == Math.ceil(this.totalRecords / this.pageSize) - 1) {
      console.log("API call");
      let apiRes = this.getData();
      let oldRes = this.dataSource.data;
      let newRes = [...oldRes, ...apiRes];

      this.dataSource = new MatTableDataSource(newRes);
      this.totalRecords = this.dataSource.data.length;
      this.dataSource.paginator = this.paginator;
    }
  }
  getData() {
    return [
      { date: '06/09/2022', time: '22:02', type: 'Invoiced', amountSent: 300, fee: 0.40, amountReceived: 299.60, status: 'Pending' },
      { date: '06/09/2022', time: '22:02', type: 'Invoiced', amountSent: 300, fee: 0.40, amountReceived: 299.60, status: 'Complete' },
      { date: '06/09/2022', time: '17:54', type: 'Invoiced', amountSent: 300, fee: 0.40, amountReceived: 299.60, status: 'Complete' },
      { date: '06/09/2022', time: '17:54', type: 'Invoiced', amountSent: 300, fee: 0.40, amountReceived: 299.60, status: 'Complete' },
      { date: '06/09/2022', time: '14:12', type: 'Invoiced', amountSent: 300, fee: 0.40, amountReceived: 299.60, status: 'Complete' },
      { date: '05/09/2022', time: '17:54', type: 'Invoiced', amountSent: 300, fee: 0.40, amountReceived: 299.60, status: 'Complete' },
      { date: '04/09/2022', time: '12:54', type: 'Invoiced', amountSent: 300, fee: 0.40, amountReceived: 299.60, status: 'Complete' },
      { date: '03/09/2022', time: '00:38', type: 'Invoiced', amountSent: 300, fee: 0.40, amountReceived: 299.60, status: 'Complete' }
      
    ];
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}




