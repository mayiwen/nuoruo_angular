import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuoruoInputComponent } from './nuoruo-input.component';
// import { nuoruoTextareaComponent } from './component/textarea/nuoruo-textarea.component';
// import { nuoruoSelectComponent } from './component/select/nuoruo-select.component';
// import { nuoruoOptionComponent } from './component/select/option/nuoruo-option.component';
// import { nuoruoInputNumberComponent } from './component/number/nuoruo-input-number.component';
// import { nuoruoDateComponent } from './component/date/nuoruo-date.component';
import { NuoruoButtonModule } from '../button/nuoruo-button.module';
import { NuoruoDateComponent } from './component/date/nuoruo-date.component';
import { NuoruoSelectComponent } from './component/select/nuoruo-select.component';
import { NuoruoOptionComponent } from './component/select/option/nuoruo-option.component';
import { NuoruoNumberComponent } from './component/number/nuoruo-number.component';
const components = [
  NuoruoInputComponent,
  NuoruoDateComponent,
  NuoruoSelectComponent,
  NuoruoOptionComponent,
  NuoruoNumberComponent
  // nuoruoTextareaComponent,
  // nuoruoSelectComponent,
  // nuoruoOptionComponent,
  // nuoruoInputNumberComponent,
  // nuoruoDateComponent,
];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NuoruoButtonModule],
  bootstrap: [],
  providers: [],
})
export class NuoruoInputModule {}
