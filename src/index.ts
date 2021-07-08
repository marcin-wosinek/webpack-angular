import "zone.js";

import { NgModule } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app-component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}

platformBrowserDynamic().bootstrapModule(AppModule);
