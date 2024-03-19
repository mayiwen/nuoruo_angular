import { Directive, Input, TemplateRef } from "@angular/core";

@Directive({
	selector: '[nrCol]'
})
export class NuoruoColDirective {
	@Input() span: number = 0
	flagShowSpan: boolean = true
	constructor(public templateRef: TemplateRef<unknown>) {}
}