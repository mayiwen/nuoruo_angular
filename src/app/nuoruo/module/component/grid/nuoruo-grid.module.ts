import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NuoruoGridComponent } from './nuoruo-grid.component';
const components = [
  NuoruoGridComponent,
];
@NgModule({
  declarations: [
 ...components
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ...components
  ],
  bootstrap: [
  ],
  providers: [],
})
export class NuoruoGridModule { }
