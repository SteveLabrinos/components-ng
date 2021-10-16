import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ElementsModule } from './elements/elements.module';
import { AppRoutingModule } from './app-routing.module';
import { CollectionsModule } from './collections/collections.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ElementsModule, CollectionsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
