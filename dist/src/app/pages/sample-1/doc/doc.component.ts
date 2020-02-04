import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DocService } from '../doc.service';
import { startWith } from 'rxjs/operators';
import { Document } from './doc.model'

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  document: Document;
  private _docSub: Subscription;

  constructor(
    private docService: DocService,
  ) { }

  ngOnInit() {
    this._docSub = this.docService.currentDocument.pipe(
      startWith({id: '', doc: 'Select an existing document or create a new one to get started'})
    ).subscribe(document => this.document = document);
  }

  ngOnDestroy(){
    this._docSub.unsubscribe();
  }

  editDoc(){
    this.docService.editDocument(this.document);
  }

}
