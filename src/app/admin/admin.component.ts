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

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.getStories();
  }

  getStories() {
    console.log('getting stories');
    this.storyService.getAll()
      .subscribe(stories => this.stories = stories);
  }

  deleteStory(story: Story) {
    this.storyService.deleteOne(story)
      .subscribe(() => this.getStories());
  }

  editStory(story: Story) {
  }
}
