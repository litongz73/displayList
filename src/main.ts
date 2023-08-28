import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import { provideAnimations } from '@angular/platform-browser/animations';
import { ListComponent } from './app/list/list.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ListComponent],
  template: ` <app-list></app-list> `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
});
