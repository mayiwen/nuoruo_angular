import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuoruoButtonModule } from '../button/nuoruo-button.module';
import { NuoruoTabComponent } from './tab/nuoruo-tab.component';
import { NuoruoTabDirective } from './directive/nuoruo-tab.directive';
import { NuoruoTabsComponent } from './nuoruo-tabs.component';
import { NuoruoIconModule } from '../icon/nuoruo-icon.module';
const components = [NuoruoTabsComponent, NuoruoTabComponent, NuoruoTabDirective];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NuoruoButtonModule, NuoruoIconModule],
  bootstrap: [],
  providers: [],
})
export class NuoruoTabsModule {}
