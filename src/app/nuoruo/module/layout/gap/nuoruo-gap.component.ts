import {
  AfterViewInit,
  Component,
  Input,
} from '@angular/core';
@Component({
  selector: 'nr-gap',
  templateUrl: './nuoruo-gap.component.html',
})
export class NuoruoGapComponent implements AfterViewInit{
  @Input() w: number = 0;
  @Input() h: number = 0;
  constructor() {
  }
  ngOnInit() {
    if (this.w && this.h) {
      this.w = 0
    }
    if (!this.w && !this.h) {
      this.h = 8
    }
  }
  ngAfterViewInit(): void {

  }
  get height() {
    return this.h
  }
  get width() {
    return this.w
  }
 
}
