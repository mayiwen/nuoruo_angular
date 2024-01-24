import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: '[nrModalHeader]'
})
export class NuoruoModalHeaderDirective {
constructor(public templateRef: TemplateRef<unknown>) {}
}