import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuoruoLoadingComponent } from './nuoruo-loading.component';
import { NuoruoLoadingService } from './service/nuoruo-loading.service';
const components = [
  NuoruoLoadingComponent,
];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  bootstrap: [],
  providers: [NuoruoLoadingService],
})
export class NuoruoLoadingModule {}
