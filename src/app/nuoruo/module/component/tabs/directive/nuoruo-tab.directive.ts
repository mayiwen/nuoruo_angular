import { Directive, Input, TemplateRef } from "@angular/core";

@Directive({
    selector: '[nrTab]'
})
export class NuoruoTabDirective {
@Input() key: string = ''
constructor(public templateRef: TemplateRef<unknown>) {}
}