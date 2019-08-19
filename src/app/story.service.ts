import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { MessageService } from './message.service';
import { Story } from './story';
import { environment } from '../environments/environment';

const url = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  getAll() {
    return this.http.get<Story[]>(url);
  }

  deleteOne(story: Story) {
    return this.http.delete<any>(`${url}/${story._id}`)
      .pipe(
        map((_) => {
          this.messageService.add('Removed story', 'info');
        }),
        catchError((err) => {
          this.messageService.add(err.error.msg, 'danger');
          return throwError(err);
        }));
  }

  createOne(story: Story) {
    return this.http.post(url, story)
      .pipe(
        map((res) => {
          if (res) {
            this.messageService.add('Added story', 'success');
          }
        }),
        catchError((err) => {
          this.messageService.add(`${err.status}: ${err.statusText}`, 'danger');
          return throwError(err);
        }));
  }

  updateOne(story: Story) {
    return this.http.put(`${url}/${story._id}`, story)
      .pipe(
        map((res) => {
          if (res) {
            this.messageService.add('Updated story', 'success');
          }
        }),
        catchError((err) => {
          this.messageService.add(`${err.status}: ${err.statusText}`, 'danger');
          return throwError(err);
        }));
  }

  constructor(private http: HttpClient,
              private messageService: MessageService) { }
}
