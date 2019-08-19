import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth.guard';
import { MessageService } from './message.service';
import { PinAuthService } from './pin-auth.service';
import { AdminComponent } from './admin/admin.component';
import { JwtInterceptor } from './jwt.interceptor';
import { NewStoryButtonComponent } from './new-story-button/new-story-button.component';
import { StoryFormComponent } from './story-form/story-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    AuthComponent,
    AdminComponent,
    NewStoryButtonComponent,
    StoryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    PinAuthService,
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
