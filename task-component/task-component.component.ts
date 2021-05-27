import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent implements OnInit {

  a = ["Create First Angular 2 App","Learn Angular 2 Architecture","Learn Components"]
  constructor() {

  }

  ngOnInit(): void {
  }

}
