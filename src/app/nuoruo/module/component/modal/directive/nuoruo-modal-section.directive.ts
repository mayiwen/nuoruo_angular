import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: '[nrModalSection]'
})
export class NuoruoModalSectionDirective {
constructor(public templateRef: TemplateRef<unknown>) {}
}