import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-assistance-req-form',
  templateUrl: './assistance-req-form.component.html',
  styleUrls: ['./assistance-req-form.component.scss']
})
export class AssistanceReqFormComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  constructor() { }

  ngOnInit(): void {
  }

}
