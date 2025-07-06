import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChatComponent } from './chat/chat.component';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import {  HttpClientModule } from '@angular/common/http';
import { ChatMessagesService } from './services/chat-messages.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatComponent,
    LoginComponent,
    ChatMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [StorageService, AuthService, ChatMessagesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
