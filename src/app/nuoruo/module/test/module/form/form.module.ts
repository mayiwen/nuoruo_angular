import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NuoruoComponentModule } from '../../../component/nuoruo-component.module';
import { NuoruoLayoutModule } from '../../../layout/nuoruo-layout.module';
import { NuoruoTestFormComponent } from './form.component';
import { NuoruoTestFormInputComponent } from './component/input/input.component';
import { NuoruoTestFormDateComponent } from './component/date/date.component';
import { NuoruoTestFormSelectComponent } from './component/select/select.component';
import { NuoruoTestFormInputNumberComponent } from './component/number/input-number.component';
import { NuoruoTestFormTextareaComponent } from './component/textarea/textarea.component';

const module: any[] = [
  NuoruoComponentModule,
  NuoruoLayoutModule
]
const components: any[] = [
  NuoruoTestFormComponent,
  NuoruoTestFormInputComponent,
  NuoruoTestFormDateComponent,
  NuoruoTestFormSelectComponent,
  NuoruoTestFormInputNumberComponent,
  NuoruoTestFormTextareaComponent
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
export class NuoruoTestFormModule {}
