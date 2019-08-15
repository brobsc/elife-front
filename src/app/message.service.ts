import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Message } from './message';
import { UUID } from './uuid';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages = [];

  constructor() { }

  add(text: string, kind: string) {
    this.messages.push(
      {
        id: UUID.generate(),
        kind,
        text
      });
  }

  remove(message: Message) {
    this.messages = this.messages.filter(m => m !== message);
  }
}
