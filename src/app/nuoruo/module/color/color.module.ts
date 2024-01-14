import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NuoruoColorComponent } from './color.component';
@NgModule({
  declarations: [
    NuoruoColorComponent
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
