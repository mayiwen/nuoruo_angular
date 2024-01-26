import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: '[nrTree]'
})
export class NuoruoTreeDirective {
constructor(public templateRef: TemplateRef<unknown>) {}
}