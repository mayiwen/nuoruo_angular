import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuoruoButtonModule } from '../button/nuoruo-button.module';
import { NuoruoTabComponent } from './tab/nuoruo-tab.component';
import { NuoruoTabDirective } from './directive/nuoruo-tab.directive';
import { NuoruoTabsComponent } from './nuoruo-tabs.component';
const components = [NuoruoTabsComponent, NuoruoTabComponent, NuoruoTabDirective];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NuoruoButtonModule],
  bootstrap: [],
  providers: [],
})
export class NuoruoTabsModule {}
