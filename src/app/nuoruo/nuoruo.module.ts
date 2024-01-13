import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuoruoComponent } from './nuoruo.component';
const components: any[] = [
  NuoruoComponent
];
const directive = [
];
let commonModule = [

]
@NgModule({
  declarations: [...components],
  exports: [components],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  bootstrap: [],
  providers: [],
})
export class NuoruoModule {}
