import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {  NuoruoDragService } from './service/nuoruo-drag.service';
import { NuoruoDragComponent } from './nuoruo-drag.component';
import { NuoruoButtonModule } from '../../component/button/nuoruo-button.module';
import { NuoruoIconModule } from '../../component/icon/nuoruo-icon.module';
const components = [
  NuoruoDragComponent
];
@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NuoruoButtonModule,
    NuoruoIconModule
  ],
  exports: [
    ...components
  ],
  bootstrap: [
  ],
  providers: [NuoruoDragService],
})
export class NuoruoDragModule { }
