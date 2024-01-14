import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuoruoComponent } from './nuoruo.component';
import { NuoruoColorModule } from './module/color/color.module';
import { NuoruoComponentModule } from './module/component/nuoruo-component.module';
const module: any[] = [
  NuoruoComponentModule
]
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
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NuoruoColorModule, ...module],
  bootstrap: [],
  providers: [],
})
export class NuoruoModule {}
