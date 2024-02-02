import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NuoruoRowComponent } from '../../../layout/row/nuoruo-row.component';
@Component({
  selector: 'nuoruo-test-button',
  templateUrl: './button.component.html',
  providers: []
})
export class NuoruoTestButtonComponent implements OnInit, AfterViewInit {
  total = 3
  @ViewChild('rowRef') rowRef!: NuoruoRowComponent
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
  }

  addOne() {
    this.total = ++this.total
  }
  subOne() {
    this.total = --this.total
  }

}
