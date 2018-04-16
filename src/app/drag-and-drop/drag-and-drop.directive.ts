import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
	selector: '[appDragAndDrop]'
})
export class DragAndDropDirective {

	constructor() { }

	@HostBinding('draggable') draggable = true;

	@HostListener('dragenter', ['$event'])
	onDragEnter(e) {
		console.log(e);
	}

}
