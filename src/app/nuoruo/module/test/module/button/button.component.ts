import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NuoruoRowComponent } from '../../../layout/row/nuoruo-row.component';
import { Subscription } from 'rxjs';
@Component({
  selector: 'nuoruo-test-button',
  templateUrl: './button.component.html',
  providers: []
})
export class NuoruoTestButtonComponent implements OnInit, AfterViewInit, OnDestroy {
 
  @ViewChild('rowRef') rowRef!: NuoruoRowComponent
  total = 3
  list: any[] = [1,2,3]
  $timer1?: any
  $timer2?: any
<<<<<<< HEAD
  flag = false
=======

>>>>>>> e16dae768a71037cb447de3029bccdf755cbdd7a
 
  constructor(private cdr: ChangeDetectorRef){}

  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
    if (this.$timer1) clearTimeout(this.$timer1)
    if (this.$timer2) clearTimeout(this.$timer2)
  }

  addOne() {
    this.total = ++this.total
    this.list = []
    this.$timer1 = setTimeout(() => {
      clearTimeout(this.$timer1)
      for (let index = 0; index < this.total * 3; index++) {
        this.list.push(this.total)
      }
      this.cdr.detectChanges()
      this.rowRef.ngAfterViewInit()
    }, 100);
  }
  subOne() {
    this.total = --this.total
    this.list = []
    this.$timer2 = setTimeout(() => {
      clearTimeout(this.$timer2)
      for (let index = 0; index < this.total * 3; index++) {
        this.list.push(this.total)
      }
      this.cdr.detectChanges()
      this.rowRef.ngAfterViewInit()
    }, 100);
  }


}
