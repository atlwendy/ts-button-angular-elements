import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  entryComponents: [ButtonComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }
  ngDoBootstrap() { 
    const acc = createCustomElement(ButtonComponent, { injector: this.injector });
    customElements.define('ts-button', acc);
  }
}
