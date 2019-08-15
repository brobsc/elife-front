import { Component, OnInit } from '@angular/core';

import { Message } from '../message';
import { MessageService } from '../message.service';

@Component({
  selector: 'en-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  setClasses(message: Message) {
    const property = `is-${message.kind}`;
    return {
      [property]: true
    };
  }

  constructor(public messageService: MessageService) { }

  removeMessage(message: Message) {
    this.messageService.remove(message);
  }

  ngOnInit() {
  }

}
