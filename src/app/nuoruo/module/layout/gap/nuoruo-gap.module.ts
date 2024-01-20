import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuoruoGapComponent } from './nuoruo-gap.component';
const components = [
  NuoruoGapComponent
];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule],
  bootstrap: [],
  providers: [],
})
export class NuoruoGapModule {}
