import "zone.js";

import { NgModule, Component } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: "app-component",
  template: "<div>AppComponent works!</div>",
})
export class AppComponent {
  constructor() {}
}

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(httpClient: HttpClient) {}
}

platformBrowserDynamic().bootstrapModule(AppModule);
