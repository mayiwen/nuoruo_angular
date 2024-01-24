import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuoruoButtonModule } from '../button/nuoruo-button.module';
import { NuoruoAlertComponent } from './nuoruo-alert.component';
import { NuoruoAlertService } from './service/nuoruo-alert.service';
const components = [
  NuoruoAlertComponent,
  

];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NuoruoButtonModule],
  bootstrap: [],
  providers: [NuoruoAlertService],
})
export class NuoroAlertModule {}
