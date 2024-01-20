import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NuoruoComponentModule } from '../../../component/nuoruo-component.module';
import { NuoruoTestLoadingComponent } from './loading.component';

const module: any[] = [
  NuoruoComponentModule
]
const components: any[] = [
  NuoruoTestLoadingComponent
];
const directive = [
];
let commonModule = [

]
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...module],
  bootstrap: [],
  providers: [],
})
export class NuoruoTestLoadingModule {}