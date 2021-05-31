import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-info',
  templateUrl: './box-info.component.html',
  styleUrls: ['./box-info.component.scss'],
})
export class BoxInfoComponent implements OnInit {

  @Input() textValue:string;
  @Input() cardValue:number;

  constructor() { }

  ngOnInit() {}

}
