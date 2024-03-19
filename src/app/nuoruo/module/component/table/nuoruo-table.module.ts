import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuoruoButtonModule } from '../button/nuoruo-button.module';
import { NuoruoTableDirective } from './directive/nuoruo-table.directive';
import { NuoruoTableComponent } from './nuoruo-table.component';
const components = [
  NuoruoTableComponent,
  NuoruoTableDirective,
];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, FormsModule, ReactiveFormsModule,NuoruoButtonModule],
  bootstrap: [],
  providers: [],
})
export class NuoruoTableModule {}
