import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuoruoLoadingModule } from './loading/nuoruo-loading.module';
import { NuoruoButtonModule } from './button/nuoruo-button.module';
import { NuoruoTabsModule } from './tabs/nuoruo-tabs.module';
const module = [NuoruoLoadingModule, NuoruoButtonModule, NuoruoTabsModule]
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
export class NuoruoComponentModule {}
