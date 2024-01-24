import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuoruoIconModule } from '../icon/nuoruo-icon.module';
import { NuoruoLoadingModule } from '../loading/nuoruo-loading.module';
import { NuoruoButtonModule } from '../button/nuoruo-button.module';
import {components} from './nuoruo-modal.model'
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NuoruoLoadingModule, NuoruoButtonModule, NuoruoIconModule],
  bootstrap: [],
  providers: [],
})
export class NuoruoModalModule {
}
