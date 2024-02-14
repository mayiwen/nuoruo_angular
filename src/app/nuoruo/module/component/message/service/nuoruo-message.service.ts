import {
  ApplicationRef,
  ComponentFactoryResolver,
  Injectable,
  Injector,
} from '@angular/core';
import { NuoruoMessageComponent } from '../nuoruo-message.component';

@Injectable()
export class NuoruoMessageService {
  popupElement$!: any;
  popup!: any;
  popupComponentRef!: any;
  constructor(
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    // this.popupElement = createCustomElement(MayiwenMessageComponent, {
    //   injector,
    // });
    // customElements.define('popup-element', this.popupElement);
  }

  // Previous dynamic-loading method required you to set up infrastructure
  // before adding the popup to the DOM.
  private showAsComponent(message: string, type?: string) {
    if (!this.popup) {
      // Create element
      this.popup = document.createElement('popup-component');

      // Create the component and wire it up with the element
      const factory = this.componentFactoryResolver.resolveComponentFactory(
        NuoruoMessageComponent
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
      this.popupComponentRef.instance.type = type;
      this.popupComponentRef.instance.message = message;

      // Add to the DOM
      document.body.appendChild(this.popup);
    } else {
      this.popupComponentRef.instance.type = type;
      this.popupComponentRef.instance.message = message;
      
    }
    
  }

  show(message: any) {
    this.showAsComponent(message)
  }
  err(message: any) {
    this.showAsComponent(message)
  }
  showTop(message: any) {
    this.showAsComponent(message,  'top')
  }
}
