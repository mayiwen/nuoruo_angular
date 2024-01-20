import { AfterViewInit, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
@Component({
  selector: 'nr-icon',
  templateUrl: './nuoruo-icon.component.html',
  styleUrls: ['./nuoruo-icon.component.scss'],
  providers: []
})
export class NuoruoIconComponent implements  AfterViewInit {
  @Input () icon: string = ''
  @Input () w: string | number = 24
  @Input () h: string | number = 28
  @Input () x?: string | number = 0
  @Input () y?: string | number = 0
  
  
  /** 指定宽高，必须是正方形，暂不支持其他形式的loading */
  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnDestroy(): void {
  }
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }
  nextTick() {
      this.cdr.markForCheck();
      this.cdr.detectChanges();
  }
}
