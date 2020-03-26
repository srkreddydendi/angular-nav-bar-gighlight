import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('tab1') tab1 : ElementRef;
  @ViewChild('tab2') tab2 : ElementRef;
  @ViewChild('tab3') tab3 : ElementRef;

  ftab1(){
   // this.tab1.nativeElement.style.backgroundColor = 'white'
    this.tab2.nativeElement.style.backgroundColor = 'white'
    this.tab3.nativeElement.style.backgroundColor = 'white'
  }
  ftab2(){
    this.tab1.nativeElement.style.backgroundColor = 'white'
   // this.tab2.nativeElement.style.backgroundColor = 'white'
    this.tab3.nativeElement.style.backgroundColor = 'white'
  }
  ftab3(){
    this.tab1.nativeElement.style.backgroundColor = 'white'
    this.tab2.nativeElement.style.backgroundColor = 'white'
   // this.tab3.nativeElement.style.backgroundColor = 'white'
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/