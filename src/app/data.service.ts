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
				row: '<i>Ctrl+I</i> <br> <b>Ctrl+B</b> <br> <u>Ctrl+U</u> <br>Some text...'
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
