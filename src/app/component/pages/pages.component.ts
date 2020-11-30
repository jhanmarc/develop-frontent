import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReportComponent } from '../report/report.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Primera', weight: 1.0079, symbol: 'A'},
  {position: 2, name: 'Segunda', weight: 4.0026, symbol: 'C'},
  {position: 3, name: 'Primera', weight: 6.941, symbol: 'A'},
  {position: 4, name: 'Tercera', weight: 9.0122, symbol: 'C'},
  {position: 5, name: 'Tercera', weight: 10.811, symbol: 'C'},
  {position: 6, name: 'Primera', weight: 4.0026, symbol: 'C'},
  {position: 7, name: 'Segunda', weight: 4.0026, symbol: 'A'},
];

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openReport() {
    const dialogRef = this.dialog.open(ReportComponent, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
