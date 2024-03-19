import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NuoruoMessageService } from '../../../component/message/service/nuoruo-message.service';
@Component({
  selector: 'nuoruo-test-table',
  templateUrl: './table.component.html',
  providers: []
})
export class NuoruoTestTableComponent implements OnInit, AfterViewInit {
  arr = [
    {
      id: '1', name: 'zs', age: 20, show: true,
      children: [{
        id: '11', name: 'zs1', age: '200', show: true,
        children: [{
          id: '111', name: 'zs11', age: '2001', show: true
        },{
          id: '112', name: 'zs12', age: '2002', show: true
        }]
      }]
    },
    { id: '2', name: '', age: 21, show: true },
    { id: '3', name: 'we', age: 22, show: true },
    { id: '4', name: 'mz', age: 23, show: true },
    { id: '4', name: 'mzasdfadfasdfa dsf dsf asdf asdf f', age: 23, show: true },
    { id: '5', name: 'mzasdfadfasdfa dsf dsf asdf asdf f', age: 23, show: true },
    { id: '6', name: 'mzasdfadfasdfa dsf dsf asdf asdf f', age: 23, show: true },
    { id: '7', name: 'mzasdfadfasdfa dsf dsf asdf asdf f', age: 23, show: true },
    { id: '8', name: 'mzasdfadfasdfa dsf dsf asdf asdf f', age: 23, show: true },
    { id: '9', name: 'mzasdfadfasdfa dsf dsf asdf asdf f', age: 23, show: true },
    { id: '10', name: 'mzasdfadfasdfa dsf dsf asdf asdf f', age: 23, show: true },
    { id: '11', name: 'mzasdfadfasdfa dsf dsf asdf asdf f', age: 23, show: true },
    { id: '12', name: 'mzasdfadfasdfa dsf dsf asdf asdf f', age: 23, show: true },
    { id: '13', name: 'mzasdfadfasdfa dsf dsf asdf asdf f', age: 23, show: true },
    { id: '14', name: 'mzasdfadfasdfa dsf dsf asdf asdf f', age: 23, show: true },
    { id: '15', name: 'mzasdfadfasdfa dsf dsf asdf asdf f', age: 23, show: true },
    { id: '16', name: 'mzasdfadfasdfa dsf dsf asdf asdf f', age: 23, show: true },
    { id: '17', name: 'mzasdfadfasdfa dsf dsf asdf asdf f', age: 23, show: true },
  ]
  tableSetting = {

  }
  tableCol = [
    {
      v: '树类子项',
      value: 'edit',
      w: 100
    },
    {
      v: 'id',
      value: 'id',
      w: 200
    },
    {
      v: '姓名',
      value: 'name',
      w: 120
    },
    {
      v: '年龄',
      value: 'age',
      w: 120
    },
    {
      v: '自定义组件3',
      value: 'show2',
      w: 120
    },
  ]
  constructor(private message: NuoruoMessageService) { }
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }
  showFn(item: any) {
    this.message.show(item.id + ' ' + item.age + ' ' + item.name)
  }
  delete(item: any) {
    this.message.show('模拟删除的id' + item.id)
  }
  dragAfter(data: any) {
    console.log('这是移动的数据')
    console.log(data)

  }


}
