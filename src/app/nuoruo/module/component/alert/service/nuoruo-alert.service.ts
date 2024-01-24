import {
  ApplicationRef,
  ComponentFactoryResolver,
  Injectable,
  Injector,
} from '@angular/core';
import { MessageI } from '../o/nuoruo-alert.i';
import { NuoruoAlertComponent } from '../nuoruo-alert.component';

@Injectable()
export class NuoruoAlertService {
  popupElement : any
  popup : any
  popupComponentRef : any
  constructor(
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  // Previous dynamic-loading method required you to set up infrastructure
  // before adding the popup to the DOM.
  private showAsComponent(message: any) {
    if (!this.popup) {
      // Create element
      this.popup = document.createElement('popup-component');
      // Create the component and wire it up with the element
      const factory = this.componentFactoryResolver.resolveComponentFactory(
        NuoruoAlertComponent
      );
      this.popupComponentRef = factory.create(this.injector, [], this.popup);
      console.log('这是element showAsComponent');
      console.log(message);
      // Attach to the view so that the change detector knows to run
      this.applicationRef.attachView(this.popupComponentRef.hostView);

      // Listen to the close event
      this.popupComponentRef.instance.closed.subscribe(() => {
        document.body.removeChild(this.popup);
        this.applicationRef.detachView(this.popupComponentRef.hostView);
        this.popup = null
      });

      // Set the message
      this.popupComponentRef.instance.message = message;

      // Add to the DOM
      document.body.appendChild(this.popup);
    } else {
      this.popupComponentRef.instance.message = message;
    }
  }

  show(message: MessageI) {
    this.showAsComponent(message)
  }
}
