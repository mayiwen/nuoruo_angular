import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: '[nrModalFooter]'
})
export class NuoruoModalFooterDirective {
constructor(public templateRef: TemplateRef<unknown>) {}
}