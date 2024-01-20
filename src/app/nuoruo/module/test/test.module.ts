import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuoruoTestComponent } from './test.component';
import { NuoruoComponentModule } from '../component/nuoruo-component.module';
import { NuoruoLayoutModule } from '../layout/nuoruo-layout.module';
import { NuoruoTestLoadingModule } from './module/loading/loading.module';
import { NuoruoTestGapModule } from './module/gap/gap.module';

const module: any[] = [
  NuoruoComponentModule,
  NuoruoLayoutModule,
  NuoruoTestLoadingModule,
  NuoruoTestGapModule
]
const components: any[] = [
  NuoruoTestComponent
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
export class NuoruoTestModule {}