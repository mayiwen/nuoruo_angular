import {
  ApplicationRef,
  ComponentFactoryResolver,
  Injectable,
  Injector,
} from '@angular/core';
import { NuoruoLoadingComponent } from '../nuoruo-loading.component';

@Injectable()
export class NuoruoLoadingService {
  popupElement : any
  popup : any
  popupComponentRef : any
  constructor(
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  private showAsComponent() {
    if (!this.popup) {
      this.popup = document.createElement('popup-component');
      const factory = this.componentFactoryResolver.resolveComponentFactory( NuoruoLoadingComponent);
      this.popupComponentRef = factory.create(this.injector, [], this.popup);
      this.applicationRef.attachView(this.popupComponentRef.hostView);
      this.popupComponentRef.instance.closed.subscribe(() => {
        document.body.removeChild(this.popup);
        this.applicationRef.detachView(this.popupComponentRef.hostView);
        this.popup = null
      });
      this.popupComponentRef.instance.message = 'fixed';
      document.body.appendChild(this.popup);
    } else {
    }
  }

  show() {
    this.showAsComponent()
  }
  hide() {
    document.body.removeChild(this.popup)
    this.popup = null
  }
}
