import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'en-new-story-button',
  templateUrl: './new-story-button.component.html',
  styleUrls: ['./new-story-button.component.scss']
})
export class NewStoryButtonComponent implements OnInit {
  showModal = true;
  story = {};

  constructor() { }

  ngOnInit() {
  }

}
