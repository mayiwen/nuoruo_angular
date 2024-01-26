import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NuoruoTreeDirective } from './directive/nuoruo-tree.directive';
import { NuoruoTreeComponent } from './nuoruo-tree.component';
const components = [
  NuoruoTreeDirective,
  NuoruoTreeComponent
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
export class NuoruoTreeModule { }
