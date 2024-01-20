import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NuoruoLoadingService } from '../../../component/loading/service/nuoruo-loading.service';
@Component({
  selector: 'nuoruo-test-loading',
  templateUrl: './loading.component.html',
  providers: []
})
export class NuoruoTestLoadingComponent implements OnInit, AfterViewInit {
  constructor(private loading: NuoruoLoadingService) {

  }
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
  }
  loadingShow() {
    this.loading.show()
    let timer = setTimeout(() => {
      clearTimeout(timer)
      this.loading.hide()
    }, 2000);
  }

}
