import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DataService, TextModel } from '../data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-design-one',
  templateUrl: './design-one.component.html',
  styleUrls: ['./design-one.component.css']
})
export class DesignOneComponent implements OnInit, AfterViewInit {

  notes: TextModel = {data: []};
  @ViewChild('editable') editable: ElementRef;
  editableDiv: HTMLDivElement;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDesignOneData().subscribe(result => {
      this.notes = result;
    });
  }

  ngAfterViewInit() {

  }

  onInnerHtmlChange(newHtml: string, index: number) {
    this.notes.data[index].row = newHtml;
  }

  onAddNoteEvent(index: number) {
    this.notes.data.splice(index + 1, 0, {id: this.notes.data.length + 1, row: ""});
  }

  onDeleteNoteEvent(index: number) {
    this.notes.data.splice(index, 1);
  }

  isLast() {
    return this.notes.data.length < 2;
  }

}
