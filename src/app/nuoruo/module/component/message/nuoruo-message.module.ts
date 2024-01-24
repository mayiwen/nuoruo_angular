import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuoruoMessageComponent } from './nuoruo-message.component';
import { NuoruoButtonModule } from '../button/nuoruo-button.module';
import { NuoruoMessageService } from './service/nuoruo-message.service';
const components = [
  NuoruoMessageComponent,
  

];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NuoruoButtonModule],
  bootstrap: [],
  providers: [NuoruoMessageService],
})
export class NuoruoMessageModule {}
