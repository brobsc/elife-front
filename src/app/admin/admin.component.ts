import { Component, OnInit } from '@angular/core';
import { first, share } from 'rxjs/operators';

import { StoryService } from '../story.service';
import { Story } from '../story';

@Component({
  selector: 'en-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  stories: Story[];
  editingStory: Story;
  showModal = false;

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.getStories();
  }

  getStories() {
    this.storyService.getAll()
      .subscribe(stories => this.stories = stories);
  }

  deleteStory(story: Story) {
    this.storyService.deleteOne(story)
      .subscribe(() => this.getStories());
  }

  editStory(story: Story) {
    this.editingStory = story;
    this.showModal = !this.showModal;
  }

  onSubmit(story) {
    this.showModal = false;
    this.storyService.updateOne(story)
      .subscribe(() => {
        this.getStories();
        this.editingStory = null;
        this.getStories();
      });
  }

  onCancel(event) {
    this.showModal = false;
    this.editingStory = null;
  }
}
