import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NuoruoMessageService } from '../../../component/message/service/nuoruo-message.service';
@Component({
  selector: 'nuoruo-test-message',
  templateUrl: './message.component.html',
  providers: []
})
export class NuoruoTestMessageComponent implements OnInit, AfterViewInit {
  constructor(private message: NuoruoMessageService) {
    
  }
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }
  show() {
    this.message.show('你好')
    
  }


}
