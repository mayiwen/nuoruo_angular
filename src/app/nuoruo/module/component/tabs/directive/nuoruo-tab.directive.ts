import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: '[nrTab]'
})
export class NuoruoTabDirective {
constructor(public templateRef: TemplateRef<unknown>) {}
}