import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './shared/components/components.component';
import { ChuckModule } from './chuck/chuck.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChuckModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
