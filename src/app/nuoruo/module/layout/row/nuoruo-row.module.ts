import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuoruoRowComponent } from './nuoruo-row.component';
import { NuoruoColDirective } from './directive/nuoruo-col.directive';
const components = [NuoruoRowComponent,NuoruoColDirective];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule],
  bootstrap: [],
  providers: [],
})
export class NuoruoRowModule {}
