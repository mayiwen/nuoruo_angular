import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'nuoruo-test-page',
  templateUrl: './page.component.html',
  providers: []
})
export class NuoruoTestPageComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
  }

  mywPage = {
    page: 1,
    pageSize: 10,
    total: 10000078
  } 
  changePage(page: any) {
    this.mywPage.page = page
    console.log('外面的更新')
    console.log(this.mywPage)
    this.mywPage = {...this.mywPage}
  }
}
