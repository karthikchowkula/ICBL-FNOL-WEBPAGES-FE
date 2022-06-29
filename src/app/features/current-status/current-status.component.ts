import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, },
  {position: 2, name: 'Helium', weight: 4.0026, },
  {position: 3, name: 'Lithium', weight: 6.941, },
  {position: 4, name: 'Beryllium', weight: 9.0122, },
  {position: 5, name: 'Boron', weight: 10.811, },
  {position: 6, name: 'Carbon', weight: 12.0107, },
  {position: 7, name: 'Nitrogen', weight: 14.0067, },
  {position: 8, name: 'Oxygen', weight: 15.9994, },
  {position: 9, name: 'Fluorine', weight: 18.9984,},
  {position: 10, name: 'Neon', weight: 20.1797, },
];
@Component({
  selector: 'app-current-status',
  templateUrl: './current-status.component.html',
  styleUrls: ['./current-status.component.scss']
})
export class CurrentStatusComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', ];
  dataSource = ELEMENT_DATA;
 
  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
