import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuoruoTestComponent } from './test.component';
import { NuoruoComponentModule } from '../component/nuoruo-component.module';
import { NuoruoLayoutModule } from '../layout/nuoruo-layout.module';
import { NuoruoTestLoadingModule } from './module/loading/loading.module';
import { NuoruoTestGapModule } from './module/gap/gap.module';
import { NuoruoTestIconModule } from './module/icon/icon.module';
import { NuoruoTestTabModule } from './module/tab/tab.module';
import { NuoruoTestSplitModule } from './module/split/split.module';
import { NuoruoTestPageModule } from './module/page/page.module';
import { NuoruoTestFormModule } from './module/form/form.module';
import { NuoruoTestButtonModule } from './module/button/button.module';
import { NuoruoTestTableModule } from './module/table/table.module';
import { NuoruoTestMessgaeModule } from './module/message/messge.module';

const module: any[] = [
  NuoruoComponentModule,
  NuoruoLayoutModule,
  NuoruoTestLoadingModule,
  NuoruoTestGapModule,
  NuoruoTestIconModule,
  NuoruoTestTabModule,
  NuoruoTestSplitModule,NuoruoTestPageModule,NuoruoTestFormModule,
  NuoruoTestButtonModule, NuoruoTestTableModule, NuoruoTestMessgaeModule
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
