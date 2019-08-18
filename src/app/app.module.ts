import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth.guard';
import { MessageService } from './message.service';
import { PinAuthService } from './pin-auth.service';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    AuthComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    PinAuthService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
