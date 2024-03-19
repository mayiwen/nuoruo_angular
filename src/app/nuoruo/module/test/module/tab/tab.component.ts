import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NuoruoTabsComponent } from '../../../component/tabs/nuoruo-tabs.component';
@Component({
  selector: 'nuoruo-test-tab',
  templateUrl: './tab.component.html',
  providers: []
})
export class NuoruoTestTabComponent implements OnInit, AfterViewInit {
  @Input() data: any
  @ViewChild('tabs') tabs!: NuoruoTabsComponent
<<<<<<< HEAD
  @ViewChild('tabs2') tabs2!: NuoruoTabsComponent
=======
>>>>>>> e16dae768a71037cb447de3029bccdf755cbdd7a
  

  arr: any = []
  arr2: any = []
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.arr = [1, 2, 3, 4]
      setTimeout(() => {
        this.arr2 = [1, 2, 3, 4]
        this.tabs.reload()
      }, 2000);
    }, 1000);
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
  }
  tabClickFn(e: any) {
    console.log(e)
  }
  selectB() {
    this.tabs2.selectByKey('b')
  }
  closeTab(e: any) {
    console.log('closeTab')
    console.log(e)
  }
  clickFn(e: any) {
    console.log('clickFn')
    console.log(e)
  }
}
