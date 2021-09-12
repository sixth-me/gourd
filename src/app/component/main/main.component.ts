import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yw-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('csd');
  }

}
