import { Component, Input } from '@angular/core';

@Component({
  selector: 'logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
})
export class Logo {
  @Input()
  height: string = '54';
  @Input()
  width: string = '52';
  @Input()
  fill:string="#6200EE"
}
