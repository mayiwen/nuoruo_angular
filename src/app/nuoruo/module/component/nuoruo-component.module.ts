import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuoruoLoadingModule } from './loading/nuoruo-loading.module';
import { NuoruoButtonModule } from './button/nuoruo-button.module';
import { NuoruoTabsModule } from './tabs/nuoruo-tabs.module';
import { NuoruoIconModule } from './icon/nuoruo-icon.module';
import { NuoruoPageModule } from './page/nuoruo-page.module';
import { NuoruoInputModule } from './input/nuoruo-input.module';
import { NuoruoTableModule } from './table/nuoruo-table.module';
import { NuoruoMessageModule } from './message/nuoruo-message.module';
import { NuoruoModalModule } from './modal/nuoruo-modal.module';
import { NuoroAlertModule } from './alert/nuoruo-alert.module';
import { NuoruoTreeModule } from './tree/nuoruo-tree.module';
const module = [NuoruoLoadingModule, NuoruoButtonModule, NuoruoTabsModule, NuoruoIconModule, NuoruoPageModule, NuoruoInputModule, NuoruoTableModule, NuoruoMessageModule,
  NuoruoModalModule, NuoroAlertModule, NuoruoTreeModule]
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
export class NuoruoComponentModule { }
