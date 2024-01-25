import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuoruoGapModule } from './gap/nuoruo-gap.module';
import { NuoruoSplitModule } from './split/nuoruo-split.module';
import { NuoruoRowModule } from './row/nuoruo-row.module';
const module = [NuoruoGapModule, NuoruoSplitModule, NuoruoRowModule]
const components: any[] = [
];
const directive = [
];
let commonModule = [

]
@NgModule({
  declarations: [...components],
  exports: [components, ...module],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...module],
  bootstrap: [],
  providers: [],
})
export class NuoruoLayoutModule {}
