/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input, ViewChild, ContentChildren } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {

@ViewChild('wrapper') wrapper: ElementRef
  constructor(private el: ElementRef) { }

  @Input('appHighlight')
   highlightColor: string;

   @ContentChildren(HighlightDirective) allMyCustomDirectives;

  @HostListener('click') 
  onMouseClick() {
  //  alert(this.highlightColor);
    this.highlight(this.highlightColor || 'red');
  }

  private highlight(color: string) {
  //  let divs = this.wrapper.nativeElement.getElementsByTagName("div");
   console.log(this.el)

    this.el.nativeElement.style.backgroundColor = color;
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/