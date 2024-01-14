import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NuoruoColorComponent } from './color.component';
import { ColorPanelComponent } from './color-panel/color-panel.component';
@NgModule({
  declarations: [
    NuoruoColorComponent,
    ColorPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [NuoruoColorComponent],
  bootstrap: [
  ],
  providers: [],
})
export class NuoruoColorModule { }
