import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'nuoruo-test-form-input-number',
  templateUrl: './input-number.component.html',
  providers: []
})
export class NuoruoTestFormInputNumberComponent implements OnInit, AfterViewInit {
  value = '1'
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
  }

}
