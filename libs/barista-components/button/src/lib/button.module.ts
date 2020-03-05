import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DtButton } from './button';
@NgModule({
  imports: [CommonModule],
  declarations: [DtButton],
  exports: [DtButton]
})
export class DtButtonModule {}
