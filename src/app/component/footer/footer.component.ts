import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import {Component, ElementRef, Inject, OnInit} from '@angular/core';
import {CanColor, mixinColor, ThemePalette} from "@angular/material/core";

const _FooterBase = mixinColor(class {
  constructor(public _elementRef: ElementRef) {}
});


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  inputs: ['color'],
  host: {
    'class': 'app-footer'
  },
})
export class FooterComponent extends _FooterBase implements OnInit, CanColor {

  private _document: Document;

  constructor(
    elementRef: ElementRef,
    private _platform: Platform,
    @Inject(DOCUMENT) document?: any,
  ) {
    super(elementRef);

    // TODO: make the document a required param when doing breaking changes.
    this._document = document;
  }

  ngOnInit(): void {
    console.log('');
  }


}
