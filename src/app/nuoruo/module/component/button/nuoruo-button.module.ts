import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuoruoLoadingModule } from '../loading/nuoruo-loading.module';
import { NuoruoButtonComponent } from './nuoruo-button.component'
const components = [
  NuoruoButtonComponent
];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NuoruoLoadingModule],
  bootstrap: [],
  providers: [],
})
export class NuoruoButtonModule {}
