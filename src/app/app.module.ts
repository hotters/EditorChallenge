import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DesignOneComponent } from './design-one/design-one.component';
import { DataService } from './data.service';
import { EditableComponent } from './editable/editable.component';

import { DragAndDropDirective } from './drag-and-drop/drag-and-drop.directive';


@NgModule({
	declarations: [
		AppComponent,
		DesignOneComponent,
		EditableComponent,
		DragAndDropDirective
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule { }
