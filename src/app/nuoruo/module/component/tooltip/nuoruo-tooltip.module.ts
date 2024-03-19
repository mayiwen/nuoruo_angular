import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuoruoTooltipComponent } from './nuoruo-tooltip.component';
const components = [
  NuoruoTooltipComponent,
];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  bootstrap: [],
  providers: [],
})
export class NuoruoTooltipModule {}
