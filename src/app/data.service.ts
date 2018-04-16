import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface TextModel {
  data: Array<{id:number, row: string}>
}

@Injectable()
export class DataService {

  private url = 'http://localhost:4200/assets/';

  constructor(private http: HttpClient) { }

  getDesignOneData(): Observable<TextModel> {
    return this.http.get<TextModel>(`${this.url}design-one.json`);
  }

  // getDesignTwoData(): Observable<textModel> {
  //   return this.http.get<textModel>(`${this.url}design-two.json`);
  // }

}
