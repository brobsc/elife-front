import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { StoryService } from '../story.service';

@Component({
  selector: 'en-new-story-button',
  templateUrl: './new-story-button.component.html',
  styleUrls: ['./new-story-button.component.scss']
})
export class NewStoryButtonComponent implements OnInit {
  showModal = false;
  @Output() created;

  constructor(private storyService: StoryService) {
    this.created = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  onSubmit(formData) {
    this.showModal = false;
    this.storyService.createOne(formData)
      .subscribe(() => this.created.emit());
  }

  onCancel(event) {
    this.showModal = false;
  }
}
