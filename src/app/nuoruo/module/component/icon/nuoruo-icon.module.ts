import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuoruoIconComponent } from './nuoruo-icon.component';
const components = [
  NuoruoIconComponent,
];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  bootstrap: [],
  providers: [],
})
export class MywIconModule {}
