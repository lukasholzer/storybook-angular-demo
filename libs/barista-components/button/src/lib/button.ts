import { Component, Input } from '@angular/core';

export enum DtColors {
  Red = 'red',
  Blue = 'blue',
  Yellow = 'yellow',
}

@Component({
  selector: 'dt-button',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button.scss'],
  host: {
    '[style.background-color]': 'color'
  }
})
export class DtButton {
  @Input() color: DtColors = DtColors.Yellow;
}
