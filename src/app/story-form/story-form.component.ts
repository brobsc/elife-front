import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Story } from '../story';

@Component({
  selector: 'en-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.scss']
})
export class StoryFormComponent implements OnInit {
  @Input() story: Story;
  @Output() submitted: EventEmitter<object>;
  @Output() canceled: EventEmitter<object>;
  storyForm;
  themes = ['Esportes',
    'Politica',
    'Entretenimento',
    'Famosos',
  ];

  constructor(private formBuilder: FormBuilder) {
    this.submitted = new EventEmitter<object>();
    this.canceled = new EventEmitter<object>();
  }

  ngOnInit() {
    let defaultValues = {
      theme: 'Entretenimento',
      title: '',
      description: '',
      imgUrl: '',
      linkUrl: ''
    };

    if (this.story) {
      defaultValues = this.story;
    }

    this.storyForm = this.formBuilder.group(defaultValues);
  }

  onSubmit(storyData) {
    this.submitted.emit(storyData);
  }

  onCancel() {
    this.canceled.emit({});
  }
}
