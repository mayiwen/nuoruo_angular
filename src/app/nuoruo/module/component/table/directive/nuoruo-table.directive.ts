import { Directive, Input, TemplateRef } from "@angular/core";

@Directive({
    selector: '[nrTable]'
})
export class NuoruoTableDirective {
    @Input() select: string = ''
    constructor(public templateRef: TemplateRef<unknown>) {}
}