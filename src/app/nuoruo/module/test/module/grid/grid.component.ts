import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NuoruoAlertService } from '../../../component/alert/service/nuoruo-alert.service';
import { NuoruoMessageService } from '../../../component/message/service/nuoruo-message.service';
@Component({
  selector: 'nuoruo-test-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
  providers: []
})
export class NuoruoTestGridComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
  }
  constructor(  private alert: NuoruoAlertService, private message: NuoruoMessageService) {
  
  }
  alert11() {
   this.alert.show({
      title: '这是一个标题',
      message: '这是里面显示的内容',
      success: () => {
        this.message.show('点击了确定按钮')
      }
    })
  }

}
