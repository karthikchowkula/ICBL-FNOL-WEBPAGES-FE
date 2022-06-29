import { AdduserComponent } from '../adduser/adduser.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from '../../Interfaces/getusers';
import { EdituserComponent } from './edituser/edituser.component';
import { ChangepasswordComponent } from '../../../features/changepassword/changepassword.component';
import { DeleteuserComponent } from '../../../features/deleteuser/deleteuser.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  // symbols: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Data', weight: 22.1797, symbol: 'G',},
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent  {
  displayedColumns: string[] = ['username', 'email', 'phonenumber', 'role','Actions','delete','changepassword'];
  dataSource!:MatTableDataSource<Users>

  constructor(public dialog: MatDialog,private apiservice:ApiService) { }
ngOnInit(): void {
  debugger
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
this.apiservice.getUsers().subscribe(
 (res)=>{
    console.log(res)
    this.dataSource=new MatTableDataSource<Users>(res)
  })
}

  addUser_dialog(){
    const dialogRef = this.dialog.open(AdduserComponent, {
      width: '1050px',
      height:'500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  editUser_dialog(){
    const dialogRef = this.dialog.open(EdituserComponent, {
      width: '1050px',
      height:'500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  changePassword_dialog(){
    const dialogRef = this.dialog.open(ChangepasswordComponent, {
      width: '1050px',
      height:'500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  deleteUser_dialog(){
    const dialogRef = this.dialog.open(DeleteuserComponent, {
      width: '1050px',
      height:'500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  }

