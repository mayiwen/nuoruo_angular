import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuoruoComponent } from './nuoruo.component';
import { NuoruoColorModule } from './module/color/color.module';
const components: any[] = [
  NuoruoComponent
];
const directive = [
];
let commonModule = [

]
@NgModule({
  declarations: [...components],
  exports: [components],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NuoruoColorModule],
  bootstrap: [],
  providers: [],
})
export class NuoruoModule {}
