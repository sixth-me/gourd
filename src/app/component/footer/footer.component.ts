import {Component, ElementRef, OnInit} from '@angular/core';
import {mixinColor} from "@angular/material/core";

const _FooterBase = mixinColor(class {
  constructor(public _elementRef: ElementRef) {}
});

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

  constructor() {
  }

  ngOnInit(): void {
    console.log('');
  }


}
