import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DocService } from '../doc.service';

@Component({
  selector: 'app-doclist',
  templateUrl: './doclist.component.html',
  styleUrls: ['./doclist.component.css']
})
export class DoclistComponent implements OnInit {

  documents: Observable<string[]>;
  currentDoc: string;
  private _docSub: Subscription;

  constructor(
    private docService: DocService,
  ) { }

  ngOnInit() {
    this.documents = this.docService.documents;
    this._docSub = this.docService.currentDocument.subscribe(doc => this.currentDoc = doc.id);
  }

  ngOnDestroy(){
    this._docSub.unsubscribe();
  }

  loadDoc(id: string){
    this.docService.getDocument(id);
  }

  newDoc(){
    this.docService.newDocument();
  }

}
