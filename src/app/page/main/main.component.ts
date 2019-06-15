import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit, OnDestroy {

  constructor() {
    console.log("MainComponent >> constructor");
  }

  ngOnInit() {
    console.log("MainComponent >> ngOnInit");
  }

  ngOnDestroy(): void {
    console.log("MainComponent >> ngOnDestroy");
  }
}
