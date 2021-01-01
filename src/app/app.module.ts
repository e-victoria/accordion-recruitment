import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionListComponent } from './accordion-list/accordion-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(Approutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
