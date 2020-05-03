import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ibm-app-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class IBMLayoutComponent implements OnInit {

  heading = 'Report Page';
  subheading = 'You can generate avtivity report here.';
  icon = 'pe-7s-graph text-success';

  constructor() {
  }

  ngOnInit() {
  }

}
