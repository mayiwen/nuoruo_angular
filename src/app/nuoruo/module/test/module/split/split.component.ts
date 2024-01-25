import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'nuoruo-test-split',
  templateUrl: './split.component.html',
  styleUrl: './split.component.scss',
  providers: []
})
export class NuoruoTestSplitComponent implements OnInit, AfterViewInit {
  @Input() data: any
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
  }
  tabClickFn(e: any) {
    console.log(e)
  }

}
