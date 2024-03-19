import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NuoruoModule } from './nuoruo/nuoruo.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NuoruoModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: []
})
export class AppComponent {
  title = 'nuoruo_angular';
  constructor() {

  }
  changeTheme() {
    console.log(window.document.documentElement.getAttribute('data-nuoruo-theme'))
    if (window.document.documentElement.getAttribute('data-nuoruo-theme') === 'black') {
      window.document.documentElement.setAttribute('data-nuoruo-theme', 'white');
    } else {
      window.document.documentElement.setAttribute('data-nuoruo-theme', 'black');
    }
  }
  

}
