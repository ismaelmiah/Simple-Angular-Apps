import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './Server/Server.component';
import { ServersComponent } from './servers/servers.component';
import { TestingComponent } from './testing/testing.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { userInputComponent } from './user-input/userInput';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    TestingComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    userInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
