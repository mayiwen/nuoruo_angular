import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuoruoLoadingModule } from './loading/nuoruo-loading.module';
const module = [NuoruoLoadingModule]
const components: any[] = [
];
const directive = [
];
let commonModule = [

]
@NgModule({
  declarations: [...components],
  exports: [components],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...module],
  bootstrap: [],
  providers: [],
})
export class NuoruoComponentModule {}
