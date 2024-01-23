import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuoruoPageComponent } from './nuoruo-page.component';
import { NuoruoButtonModule } from '../button/nuoruo-button.module';
const components = [
  NuoruoPageComponent
];
@NgModule({
  declarations: [...components],
  exports: [...components],
  // imports: [CommonModule, FormsModule, ReactiveFormsModule, MywButtonModule, MywInputModule],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NuoruoButtonModule],
  bootstrap: [],
  providers: [],
})
export class NuoruoPageModule {}
