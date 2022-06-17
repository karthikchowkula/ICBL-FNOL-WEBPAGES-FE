import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//   template: `
//   <app-header-footer></app-header-footer>
//  <router-outlet></router-outlet>
 
// `, 

 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FNOL-WEB-PAGES_FRONTEND';
  public link!: string;
  constructor(private router:Router){
    this.link=router.url
  }
}
