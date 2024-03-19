import { AfterViewInit, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
@Component({
  selector: 'nr-tooltip',
  templateUrl: './nuoruo-tooltip.component.html',
  styleUrls: ['./nuoruo-tooltip.component.scss'],
  providers: []
})
export class NuoruoTooltipComponent implements  AfterViewInit {
  @Input() v: string = ''
  flagShow = false
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
