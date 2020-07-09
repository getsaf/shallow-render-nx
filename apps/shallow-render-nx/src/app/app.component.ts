import { Component, Input } from '@angular/core';

@Component({
  selector: 'shallow-render-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() myInput!: string;
  title = 'shallow-render-nx';
}
