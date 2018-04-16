import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface TextModel {
	data: Array<{ id: number, row: string }>;
}

@Injectable()
export class DataService {

	private url = 'http://localhost:4200/assets/';

	private data = {
		data: [
			{
				id: 1,
				row: '<i>Hello</i> world...<br><br>This is some content<br><br>Isn\'t it awesome?<br><br>I like it...'
			}
		]
	};

	constructor(private http: HttpClient) { }

	// getDesignOneData(): Observable<TextModel> {
	// 	return this.http.get<TextModel>(`${this.url}design-one.json`);
	// }

	getDesignOneData() {
		return Observable.create(obs => { obs.next(this.data); });
	}

}
