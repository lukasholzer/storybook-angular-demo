import { Component, Input } from '@angular/core';

@Component({
  selector: 'dt-button',
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
  host: {
    '[style.background-color]': 'color'
  }
})
export class DtButton {
  @Input() color: 'blue' | 'red' = 'red';
}
